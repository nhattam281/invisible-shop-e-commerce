import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import cartSlice from '../../redux/Slice/cartSlice';
import './Product.scss';

function Product({ item }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        dispatch(cartSlice.actions.addToCart(item));
    };

    const handleNavigate = (item) => {
        navigate(`/productdetail/${item.id}`);
    };

    return (
        <div className='product'>
            <div className='product_container'>
                <div
                    className='product_image'
                    onClick={() => handleNavigate(item)}
                >
                    <img src={item.thumbnail} alt='product' />
                </div>
                <div className='product_info'>
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                    <h4>${item.price}</h4>
                    <div className='product_add_to_cart'>
                        <i
                            className='fa-solid fa-cart-plus'
                            onClick={() => handleAddToCart(item)}
                        ></i>
                    </div>
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
