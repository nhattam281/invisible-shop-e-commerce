import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
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
    const [showSubMenu, setShowSubMenu] = useState(false);

    //test login
    const [userLogin, setUserLogin] = useState(false);
    const navigate = useNavigate();
    const [showUserDropdown, setShowUserDropdown] = useState(false);

    useEffect(() => {
        dispatch(cartSlice.actions.getTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);

    const toggleSubmenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    const handleNavigate = () => {
        window.scroll(0, 0);
    };

    //user dropdown
    const handleNavigateAccount = () => {
        navigate('/account');
        setShowUserDropdown(!showUserDropdown);
        window.scroll(0, 0);
    };

    const handleNavigateLogout = () => {
        navigate('/login');
        setShowUserDropdown(!showUserDropdown);
        window.scroll(0, 0);
    };

    const handleNavigateOrders = () => {
        navigate('/orders');
        setShowUserDropdown(!showUserDropdown);
        window.scroll(0, 0);
    };

    const handleShowUserDropdown = () => {
        setShowUserDropdown(!showUserDropdown);
    };

    return (
        <div className='header'>
            <div className='header_container'>
                <div className='header_logo'>
                    <NavLink
                        to='/'
                        className='header_logo-icon'
                        onClick={handleNavigate}
                    >
                        inviShop.
                    </NavLink>
                </div>
                <div className='header_menu'>
                    {menuLinks.map((link) => (
                        <NavLink
                            to={link.path}
                            key={link.title}
                            className='header_menu-item'
                            onClick={handleNavigate}
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </div>
                <div className='header_button'>
                    {userLogin ? (
                        <div className='header_button-user'>
                            <img
                                src={userImage}
                                alt=''
                                className='header_button-userimg'
                                onClick={handleShowUserDropdown}
                            />

                            {showUserDropdown && (
                                <div className='header_button-user-dropdown'>
                                    <button
                                        onClick={handleNavigateAccount}
                                        className='header_button-user-dropdown-account'
                                    >
                                        Account
                                    </button>
                                    <button
                                        onClick={handleNavigateOrders}
                                        className='header_button-user-dropdown-orders'
                                    >
                                        Orders
                                    </button>
                                    <button
                                        onClick={handleNavigateLogout}
                                        className='header_button-user-dropdown-logout'
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <NavLink to='/login' className='header_button-login'>
                            <i className='fa-solid fa-user' />
                        </NavLink>
                    )}

                    <NavLink
                        to='/cart'
                        className={`header_button-cart ${
                            cartQuantity > 0
                                ? 'header_button-cart-haveitems'
                                : ''
                        }`}
                        onClick={handleNavigate}
                    >
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
