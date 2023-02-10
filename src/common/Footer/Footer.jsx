import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <div className='footer_container-col'>
                    <h4>company</h4>
                    <ul>
                        <li>about us</li>
                        <li>our services</li>
                        <li>privacy policy</li>
                        <li>affiliate program</li>
                    </ul>
                </div>
                <div className='footer_container-col'>
                    <h4>Get help</h4>
                    <ul>
                        <li>FAQs</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Payment Options</li>
                    </ul>
                </div>
                <div className='footer_container-col'>
                    <h4>online shop</h4>
                    <ul>
                        <li>smartphones</li>
                        <li>laptops</li>
                        <li>Dress</li>
                        <li>Shoes</li>
                    </ul>
                </div>
                <div className='footer_container-col'>
                    <div className='footer_socials'>
                        <h4>Follow Us</h4>
                        <NavLink to='/' className='footer_button-social'>
                            <i class='fab fa-facebook-f' />
                        </NavLink>
                        <NavLink to='/' className='footer_button-social'>
                            <i class='fab fa-twitter' />
                        </NavLink>
                        <NavLink to='/' className='footer_button-social'>
                            <i class='fab fa-instagram' />
                        </NavLink>
                        <NavLink to='/' className='footer_button-social'>
                            <i class='fab fa-linkedin-in' />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
