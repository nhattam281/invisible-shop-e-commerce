import React, { useState } from 'react';

import './SingleProduct.scss';

const productImg = {
    images: [
        'https://i.dummyjson.com/data/products/26/1.jpg',
        'https://i.dummyjson.com/data/products/26/2.jpg',
        'https://i.dummyjson.com/data/products/26/3.jpg',
        'https://i.dummyjson.com/data/products/26/4.jpg',
        'https://i.dummyjson.com/data/products/26/5.jpg',
        'https://i.dummyjson.com/data/products/26/thumbnail.jpg',
    ],
};

function SingleProduct() {
    const [sliderImage, setSliderImage] = useState(productImg.images[0]);

    const handleSingleProductImgSlider = (index) => {
        const slider = productImg.images[index];
        setSliderImage(slider);
    };

    return (
        <div className='single_product'>
            <div className='single_product_image'>
                <img
                    src={sliderImage}
                    alt=''
                    className='single_product_image-zoom'
                />
                <div className='single_product_image-thumnail'>
                    {productImg.images.map((value, index) => {
                        console.log('this', index);
                        return (
                            <img
                                key={index}
                                src={value}
                                alt=''
                                className='thumnail'
                                onClick={() =>
                                    handleSingleProductImgSlider(index)
                                }
                            />
                        );
                    })}
                </div>
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
