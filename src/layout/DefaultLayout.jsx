import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer/Footer';
import Header from '../common/Header/Header';

function DefaultLayout() {
    return (
        <div>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
