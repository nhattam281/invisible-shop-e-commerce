import React, { useEffect } from 'react';
import Slider from 'react-slick';

import { useDispatch, useSelector } from 'react-redux';
import {
    productsAllSelector,
    productsStatusSelector,
} from '../../redux/selector';
import { fetchProducts } from '../../redux/Slice/productSlice';
import { STATUS } from '../../utils/status';
import Heading from '../Heading/Heading';
import Product from '../Product/Product';
import './TrendingProduct.scss';

import Loading from '../Loading/Loading';

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

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        window.scrollTo(0, 0);
    }, []);

    const products = useSelector(productsAllSelector);
    const productsStatus = useSelector(productsStatusSelector);

    return (
        <div className='trending_prod'>
            <Heading title={'Trending products'} />
            <Slider {...settings} className='trending_product-slider'>
                {productsStatus === STATUS.SUCCEEDED
                    ? products.map((value) => (
                          <Product key={value.id} item={value} />
                      ))
                    : // <Loading />
                      Array(4)
                          .fill(0)
                          .map((_, index) => <Loading key={index} />)}
            </Slider>
        </div>
    );
}

export default TrendingProduct;
