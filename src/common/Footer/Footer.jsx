import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <div className='footer_logo'>
                    <h1>invisibleShop.</h1>
                </div>
                <div className='footer_content'>
                    <div className='footer_content-socials'>
                        <h3>Follow us:</h3>
                        <a
                            href='http://facebook.com'
                            className='footer_social-button'
                        >
                            <i className='fab fa-facebook-f' />
                        </a>
                        <a
                            href='https://twitter.com/'
                            className='footer_social-button'
                        >
                            <i className='fab fa-twitter' />
                        </a>
                        <a
                            href='https://www.instagram.com/'
                            className='footer_social-button'
                        >
                            <i className='fab fa-instagram' />
                        </a>
                        <a
                            href='https://www.linkedin.com/'
                            className='footer_social-button'
                        >
                            <i className='fab fa-linkedin-in' />
                        </a>
                    </div>

                    <div className='footer_content-info'>
                        <div className='footer_content-infor-items'>
                            <h4>company</h4>
                            <ul>
                                <li>about us</li>
                                <li>our services</li>
                                <li>privacy policy</li>
                                <li>affiliate program</li>
                            </ul>
                        </div>
                        <div className='footer_content-infor-items'>
                            <h4>Get help</h4>
                            <ul>
                                <li>FAQs</li>
                                <li>Shipping</li>
                                <li>Returns</li>
                                <li>Payment Options</li>
                            </ul>
                        </div>
                        <div className='footer_content-infor-items'>
                            <h4>online shop</h4>
                            <ul>
                                <li>laptops</li>
                                <li>Dress</li>
                                <li>Shoes</li>
                                <li>smartphones</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
