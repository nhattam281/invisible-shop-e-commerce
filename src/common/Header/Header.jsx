import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const menuLinks = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Shop Category',
        path: '/shop',
    },
    {
        title: 'Cart',
        path: '/cart',
    },
];

function Header() {
    return (
        <div className='header'>
            <h1>InvisibleShop.</h1>
            {menuLinks.map((link) => (
                <NavLink
                    to={link.path}
                    key={link.title}
                    className='header_menu'
                >
                    {link.title}
                </NavLink>
            ))}
        </div>
    );
}

export default Header;
