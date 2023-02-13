import React from 'react';
import Slider from 'react-slick';

import './SingleProduct.scss';

function SingleProduct() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlice: 0,
    };

    return (
        <div className='single_product'>
            <div className='single_product-image'>
                <Slider {...settings}>
                    <img
                        src='https://i.dummyjson.com/data/products/3/1.jpg'
                        alt='detail'
                    />
                    <img
                        src='https://i.dummyjson.com/data/products/1/2.jpg'
                        alt='detail'
                    />
                    <img
                        src='https://i.dummyjson.com/data/products/3/1.jpg'
                        alt='detail'
                    />
                </Slider>
            </div>
            <div className='single_product-details'>
                <h1>HP Pavilion Gaming 15</h1>
                <div className='single_product-vote'>
                    <div>
                        <i className='fa-solid fa-star' />
                        <i className='fa-solid fa-star' />
                        <i className='fa-solid fa-star' />
                        <i className='fa-solid fa-star' />
                        <i className='fa-regular fa-star' />
                    </div>
                    <span>|</span>
                    <p>(4 reviews)</p>
                </div>
                <h2>$756</h2>
                <div className='single_product-sale'>
                    <p>$840</p>
                    <div className='single_product-discount'>-10%</div>
                </div>
                <div className='single_product-stock'>
                    <span>Status:</span>
                    <p>in Stock</p>
                </div>
                <div className='single_product-decs'>
                    <span>Description:</span>
                    <p>An apple mobile which is nothing like apple</p>
                </div>
                <div className='single_product-quantity'>
                    <span>Quantity:</span>
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default SingleProduct;
