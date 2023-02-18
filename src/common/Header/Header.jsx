import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import userImage from '../../assets/images/user_318-219673.jpg';
import './Header.scss';

const menuLinks = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Shop',
        path: '/shop',
    },
    {
        title: 'Cart',
        path: '/cart',
    },
];

function Header() {
    const cartQuantity = 1;
    const [userLogin, setUserLogin] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubmenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    return (
        <div className='header'>
            <div className='header_container'>
                <div className='header_logo'>
                    <NavLink to='/' className='header_logo-icon'>
                        inviShop.
                    </NavLink>
                </div>
                <div className='header_menu'>
                    {menuLinks.map((link) => (
                        <NavLink
                            to={link.path}
                            key={link.title}
                            className='header_menu-item'
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </div>
                <div className='header_button'>
                    {userLogin ? (
                        <img
                            src={userImage}
                            alt=''
                            className='header_button-userimg'
                        />
                    ) : (
                        <NavLink to='/login' className='header_button-login'>
                            <i className='fa-solid fa-user' />
                        </NavLink>
                    )}

                    <NavLink to='/cart' className='header_button-cart'>
                        Cart | ({cartQuantity})
                    </NavLink>
                </div>
                <div
                    className='header_show-submenu-button'
                    onClick={toggleSubmenu}
                >
                    <i className='fa-solid fa-bars'></i>
                </div>

                {showSubMenu && (
                    <div className='header_submenu'>
                        {menuLinks.map((link) => (
                            <NavLink
                                to={link.path}
                                key={link.title}
                                className='header_menu-item'
                                onClick={toggleSubmenu}
                            >
                                {link.title}
                            </NavLink>
                        ))}
                        {userLogin ? (
                            <NavLink
                                to={'/login'}
                                className='header_submenu-button'
                                onClick={() => {
                                    setUserLogin(!userLogin);
                                }}
                            >
                                Logout
                            </NavLink>
                        ) : (
                            <NavLink
                                to={'/login'}
                                className='header_submenu-button'
                            >
                                Login
                            </NavLink>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
