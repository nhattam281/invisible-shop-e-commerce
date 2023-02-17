import React, { useState } from 'react';
import './SingleProduct.scss';

function SingleProduct({ item }) {
    const [sliderImage, setSliderImage] = useState(item.images[0]);
    const [quantity, setQuantity] = useState(1);

    const handleSingleProductImgSlider = (index) => {
        const slider = item.images[index];
        setSliderImage(slider);
    };

    const handleIncrease = () => {
        setQuantity((prevQty) => {
            let temQty = prevQty + 1;
            if (temQty > item.stock) temQty = item.stock;
            return temQty;
        });
    };

    const handleDecrease = () => {
        setQuantity((prevQty) => {
            let temQty = prevQty - 1;
            if (temQty < 1) temQty = 1;
            return temQty;
        });
    };

    const discountPrice = Math.floor(
        item.price - item.price * (item.discountPercentage / 100)
    );

    return (
        <div className='single_product'>
            <div className='single_product_image'>
                <img
                    src={sliderImage}
                    alt=''
                    className='single_product_image-zoom'
                />
                <div className='single_product_image-thumnail'>
                    {item.images.map((value, index) => {
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
                <h1>{item.title}</h1>
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
                <h2>${discountPrice}</h2>
                <div className='single_product-sale'>
                    <p>${item.price}</p>
                    <div className='single_product-discount'>
                        - {item.discountPercentage} %
                    </div>
                </div>
                <div className='single_product-stock'>
                    <span>Stock:</span>
                    <p>{item.stock}</p>
                </div>
                <div className='single_product-decs'>
                    <span>Description:</span>
                    <p>{item.description}</p>
                </div>
                <div className='single_product-quantity'>
                    <span>Quantity:</span>
                    <div className='single_product-quantity-item'>
                        <i
                            className='fa-solid fa-minus'
                            onClick={handleDecrease}
                        ></i>
                        <p>{quantity}</p>
                        <i
                            className='fa-solid fa-plus'
                            onClick={handleIncrease}
                        ></i>
                    </div>
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    );
}

export default SingleProduct;
