import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import './Product.scss';
function Product({ item }) {
    return (
        <div className='product'>
            <div className='product_container'>
                <div className='product_image'>
                    <img src={item.thumbnail} alt='product' />
                </div>
                <div className='product_info'>
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                    <h4>${item.price}</h4>
                    <NavLink
                        to={`/productdetail/${item.id}`}
                        className='product_button'
                    >
                        Detail
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

const Loading = () => {
    return (
        <div className='product'>
            <div className='product_container'>
                <div className='product_image'>
                    <Skeleton />
                </div>
                <div className='product_info'>
                    <Skeleton />
                </div>
            </div>
        </div>
    );
};

Product.Loading = Loading;

export default Product;
