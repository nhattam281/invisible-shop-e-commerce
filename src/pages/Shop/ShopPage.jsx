import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../../components/Filter/Filter';
import Product from '../../components/Product/Product';
import SortBy from '../../components/SortBy/SortBy';
import {
    productsAllSelector,
    productsStatusSelector,
} from '../../redux/selector';
import { fetchProducts } from '../../redux/Slice/productSlice';
import { STATUS } from '../../utils/status';
import './ShopPage.scss';

function ShopPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        window.scrollTo(0, 0);
    }, []);

    const products = useSelector(productsAllSelector);
    const productsStatus = useSelector(productsStatusSelector);

    const handleFilterCategory = (e) => {
        const filterValue = e.target.textContent;
        console.log(e.target.textContent);
        console.log(products);

        // products.filter();
    };
    return (
        <div className='shop'>
            <div className='shop_banner'>
                <h2>Shop</h2>
                <span>Enjoys your shopping times</span>
            </div>
            <div className='shop_filter'>
                <Filter onClick={handleFilterCategory} />
                <SortBy />
                <div className='shop_search'>
                    <i className='fa-solid fa-magnifying-glass'></i>
                    <input
                        type='text'
                        className='shop_search-item'
                        placeholder='Enter Product...'
                    />
                </div>
            </div>

            <div className='shop_product'>
                {productsStatus === STATUS.SUCCEEDED ? (
                    products.map((value) => (
                        <Product key={value.id} item={value} />
                    ))
                ) : (
                    <Product.Loading />
                )}
            </div>
        </div>
    );
}

export default ShopPage;
