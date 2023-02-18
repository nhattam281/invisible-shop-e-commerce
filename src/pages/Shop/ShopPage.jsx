import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import Loading from '../../components/Loading/Loading';
import Product from '../../components/Product/Product';
import SortBy from '../../components/SortBy/SortBy';
import {
    productSortBySelector,
    // productsAllSelector,
    // productsRemainingSelector,
    productsStatusSelector,
} from '../../redux/selector';
import filtersSlice from '../../redux/Slice/filtersSlice';
import { fetchProducts } from '../../redux/Slice/productSlice';
import { STATUS } from '../../utils/status';
import './ShopPage.scss';

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

            <div className='shop_product'>
                {productsStatus === STATUS.SUCCEEDED
                    ? products.map((value) => (
                          <Product key={value.id} item={value} />
                      ))
                    : products.map((value) => <Loading key={value.id} />)}
            </div>
        </div>
    );
}

export default ShopPage;
