import React from 'react';
import { NavLink } from 'react-router-dom';
import './CheckoutPage.scss';

function CheckoutPage() {
    return (
        <div className='checkout'>
            <div className='checkout_banner'>
                <h2>Checkout</h2>
                <span>Shipping Information</span>
            </div>

            <div className='checkout_nav'>
                <h1>Billing Address</h1>
                <NavLink to='/shop' className='checkout_nav-button'>
                    Back to cart
                </NavLink>
            </div>

            <div className='checkout_main'>
                <div className='checkout_info'>
                    <div className='checkout_info-contact'>
                        <h2>Contact Infomation</h2>
                        <input type='text' placeholder='Enter Phone' />
                        <input type='email' placeholder='Enter Email' />
                    </div>
                    <div className='checkout_info-address'>
                        <h2>Shipping Address</h2>
                        <input type='text' placeholder='Enter Name' />
                        <input type='text' placeholder='Enter Address' />
                    </div>
                </div>
                <div className='checkout_total'>
                    <div className='checkout_total-sub'>
                        <div className='checkout_total-item'>
                            <h3>Total Qty:</h3>
                            <span>1</span>
                        </div>
                        <div className='checkout_total-item'>
                            <h3>Subtotal:</h3>
                            <span>$550</span>
                        </div>
                        <div className='checkout_total-item'>
                            <h3>Shipping:</h3>
                            <span>$0</span>
                        </div>
                    </div>
                    <div className='checkout_total-main'>
                        <div className='checkout_total-item'>
                            <h2>Total:</h2>
                            <span>$550</span>
                        </div>
                        <button className='checkout_total-button'>
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
