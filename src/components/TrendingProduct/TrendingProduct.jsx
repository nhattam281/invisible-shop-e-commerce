import React from 'react';
import Slider from 'react-slick';

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
        prevArrow: false,

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
    return (
        <div className='trending_prod'>
            <Heading title={'Trending products'} />
            {/* <div className='trending_product-items'>
                <Product />
                <Product />
                <Product />
                <Product />
            </div> */}
            <Slider {...settings} className='trending_product-slider'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Slider>
        </div>
    );
}

export default TrendingProduct;
