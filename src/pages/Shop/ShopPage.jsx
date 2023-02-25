import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import Loading from '../../components/Loading/Loading';
import Product from '../../components/Product/Product';
import SortBy from '../../components/SortBy/SortBy';
import {
    productSortBySelector,
    productsStatusSelector,
} from '../../redux/selector';
import filtersSlice from '../../redux/Slice/filtersSlice';
import { fetchProducts } from '../../redux/Slice/productSlice';
import { STATUS } from '../../utils/status';
import './ShopPage.scss';

//pagination
import ReactPaginate from 'react-paginate';

function ShopPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        window.scrollTo(0, 0);
    }, []);

    const products = useSelector(productSortBySelector);
    const productsStatus = useSelector(productsStatusSelector);

    const handleFilterCategory = (e) => {
        const filterCategoryValue = e.target.textContent;
        dispatch(
            filtersSlice.actions.categoryFilterChange(filterCategoryValue)
        );
    };

    const handleSortBy = (e) => {
        const filterSortbyValue = e.target.textContent;
        dispatch(filtersSlice.actions.sortbyFilterChange(filterSortbyValue));
    };

    const handleSearchChange = (e) => {
        dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
    };

    //pagination
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
        window.scroll(0, 0);
    };

    return (
        <div className='shop'>
            <div className='shop_banner'>
                <h2>Shop</h2>
                <span>Enjoys your shopping times</span>
            </div>
            <div className='shop_filter'>
                <Filter onClick={handleFilterCategory} />
                <SortBy onClick={handleSortBy} />
                <div className='shop_search'>
                    <i className='fa-solid fa-magnifying-glass'></i>
                    <input
                        type='text'
                        className='shop_search-item'
                        placeholder='Enter Product...'
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            {products.length === 0 && (
                <div className='shop_notfound'>
                    <h1>No product found</h1>
                </div>
            )}

            <div className='shop_product'>
                {productsStatus === STATUS.SUCCEEDED
                    ? currentItems.map((value) => (
                          <Product key={value.id} item={value} />
                      ))
                    : currentItems.map((value) => <Loading key={value.id} />)}
            </div>

            <ReactPaginate
                breakLabel='...'
                nextLabel='>'
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel='<'
                renderOnZeroPageCount={null}
                containerClassName='shop_pagination'
                pageLinkClassName='shop_pagination_page-num'
                previousLinkClassName='shop_pagination_page-num shop_pagination-prev'
                nextLinkClassName='shop_pagination_page-num shop_pagination-next'
                activeLinkClassName='shop_pagination-active'
            />
        </div>
    );
}

export default ShopPage;
