import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import userImage from '../../assets/images/user_318-219673.jpg';
import {
    cartItemsSelector,
    cartTotalQuantitySelector,
} from '../../redux/selector';
import './Header.scss';

import cartSlice from '../../redux/Slice/cartSlice';

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
    const cartQuantity = useSelector(cartTotalQuantitySelector);
    const cart = useSelector(cartItemsSelector);
    const dispatch = useDispatch();
    const [userLogin, setUserLogin] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);

    useEffect(() => {
        dispatch(cartSlice.actions.getTotal());
    }, [cart]);

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
