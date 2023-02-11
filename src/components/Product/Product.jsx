import React from 'react';
import { NavLink } from 'react-router-dom';
import './Product.scss';

const test = {
    title: 'MacBook Pro',
    thumbnail: 'https://i.dummyjson.com/data/products/1/1.jpg',
    category: 'smartphones',
    price: 549,
};

function Product() {
    return (
        <div className='product'>
            <div className='product_container'>
                <div className='product_image'>
                    <img src={test.thumbnail} alt='product' />
                </div>
                <div className='product_info'>
                    <h3>{test.title}</h3>
                    <p>{test.category}</p>
                    <h4>${test.price}</h4>
                    <NavLink to='/productdetail' className='product_button'>
                        Detail
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Product;
