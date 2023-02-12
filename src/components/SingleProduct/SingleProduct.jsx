import React from 'react';
import './SingleProduct.scss';

function SingleProduct() {
    return (
        <div className='single_product'>
            <div className='single_product-image'>
                <img
                    src='https://i.dummyjson.com/data/products/9/1.jpg'
                    alt='detail'
                />
            </div>
            <div className='single_product-details'>
                <h1>Product Name</h1>
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
                    <p>840</p>
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
