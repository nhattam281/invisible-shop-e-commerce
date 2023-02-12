import React from 'react';
import Heading from '../Heading/Heading';
import Product from '../Product/Product';
import './TrendingProduct.scss';

function TrendingProduct() {
    return (
        <div className='trending_prod'>
            <Heading title={'Trending products'} />
            <div className='trending_product-items'>
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default TrendingProduct;
