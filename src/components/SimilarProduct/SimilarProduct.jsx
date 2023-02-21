import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { productsAllSelector } from '../../redux/selector';
import { fetchProducts } from '../../redux/Slice/productSlice';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import './SimilarProduct.scss';

function SimilarProduct({ product }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        window.scrollTo(0, 0);
    }, []);

    const productList = useSelector(productsAllSelector);

    const similarProduct = productList.filter(
        (item) => item.category === product.category && item.id !== product.id
    );

    //pagination
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = similarProduct.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(similarProduct.length / itemsPerPage);
    // const pageCount = 5;

    const handlePageClick = (event) => {
        const newOffset =
            (event.selected * itemsPerPage) % similarProduct.length;
        setItemOffset(newOffset);
    };

    return (
        <div className='similar'>
            <h1>Similar product</h1>
            <div className='similar_products'>
                {currentItems
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
                containerClassName='similar_pagination'
                pageLinkClassName='similar_pagination_page-num'
                previousLinkClassName='similar_pagination_page-num similar_pagination-prev'
                nextLinkClassName='similar_pagination_page-num similar_pagination-next'
                activeLinkClassName='similar_pagination-active'
            />
        </div>
    );
}

export default SimilarProduct;
