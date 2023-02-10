import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

import './Banner.scss';

function Banner() {
    // console.log({ typeWriter });
    return (
        <div className='banner'>
            <div className='banner_container'>
                <h2>Welcome to</h2>

                <h1>
                    <Typewriter
                        words={['invisibleShop.']}
                        loop
                        cursor
                        cursorStyle='|'
                        typeSpeed={90}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <div className='hearder_container-gap'></div>

                <h3>Enjoy your shopping times</h3>

                <NavLink to='/shop' className='banner_button'>
                    Get started
                </NavLink>
            </div>
        </div>
    );
}

export default Banner;
