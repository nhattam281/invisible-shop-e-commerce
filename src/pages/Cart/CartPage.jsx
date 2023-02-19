import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import {
    cartItemsSelector,
    cartTotalAmountSelector,
} from '../../redux/selector';
import cartSlice from '../../redux/Slice/cartSlice';
import './CartPage.scss';

import { useNavigate } from 'react-router-dom';

function CartPage() {
    const cartTotal = useSelector(cartTotalAmountSelector);
    const cart = useSelector(cartItemsSelector);
    const [userLogin, setUserLogin] = useState(false);

    const dispath = useDispatch();
    const navigate = useNavigate();

    const handleCheckoutClick = () => {
        if (userLogin) {
            navigate('/checkout');
        } else {
            navigate('/login');
        }
    };
    const handleBackToShop = () => {
        navigate('/shop');
    };

    useEffect(() => {
        dispath(cartSlice.actions.getTotal());
    }, [cart]);
    return (
        <div className='cart'>
            <div className='cart_banner'>
                <h2>Cart</h2>
                <span>Check out</span>
            </div>
            <div className='cart_nav'>
                <h1>My cart</h1>
                <NavLink to='/shop' className='cart_nav-button'>
                    Back to shop
                </NavLink>
            </div>

            <div className='cart_main'>
                <div className='cart_item'>
                    <CartItem />
                </div>
                <div className='cart_total'>
                    <div className='cart_total-sub'>
                        <h2>Subtotal</h2>
                        <span>${cartTotal}</span>
                    </div>
                    <p>Taxes and shipping will caculate in checkout</p>
                    <button
                        className='cart_total-button'
                        onClick={handleCheckoutClick}
                    >
                        Checkout
                    </button>
                    <button
                        className='cart_total-button'
                        onClick={handleBackToShop}
                    >
                        Continue shopping
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
