import React from 'react';
import { NavLink } from 'react-router-dom';
import bannerImg from '../../assets/images/hero-img.png';
import './Banner.scss';

function Banner() {
    return (
        <div className='banner'>
            <div className='banner_container'>
                <div className='banner_content'>
                    <div className='banner_content-items'>
                        <h2 className='banner_content-upper'>
                            Online Shopping
                        </h2>
                        <h2 className='banner_content-highlight'>
                            Invisible Shop.
                        </h2>
                        {/* <p className='banner_content-description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illo velit iusto sint nesciunt ducimus.
                        </p> */}
                    </div>

                    <NavLink to='/shop' className='banner_button'>
                        Get started now
                    </NavLink>
                </div>

                <img src={bannerImg} alt='inviShop.' className='banner_image' />
            </div>
        </div>
    );
}

export default Banner;
