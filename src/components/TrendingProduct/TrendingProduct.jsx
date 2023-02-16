import React from 'react';
import Slider from 'react-slick';

import { useSelector } from 'react-redux';
import {
    productsAllSelector,
    productStatusSelector,
} from '../../redux/selector';
import { STATUS } from '../../utils/status';
import Heading from '../Heading/Heading';
import Product from '../Product/Product';
import './TrendingProduct.scss';

function TrendingProduct() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1248,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const products = useSelector(productsAllSelector);
    const productsStatus = useSelector(productStatusSelector);

    return (
        <div className='trending_prod'>
            <Heading title={'Trending products'} />
            <Slider {...settings} className='trending_product-slider'>
                {productsStatus === STATUS.SUCCEEDED
                    ? products.map((value) => (
                          <Product key={value.id} item={value} />
                      ))
                    : console.log('loading')}
            </Slider>
        </div>
    );
}

export default TrendingProduct;
