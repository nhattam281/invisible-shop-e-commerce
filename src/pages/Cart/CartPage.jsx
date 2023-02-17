import React from 'react';
import { NavLink } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import './CartPage.scss';

function CartPage() {
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
                        <span>$8000</span>
                    </div>
                    <p>Taxes and shipping will caculate in checkout</p>
                    <NavLink to='/checkout' className='cart_total-button'>
                        Checkout
                    </NavLink>
                    <NavLink to='/shop' className='cart_total-button'>
                        Continue shopping
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
