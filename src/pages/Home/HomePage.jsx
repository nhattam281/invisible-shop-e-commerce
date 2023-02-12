import React from 'react';
import Banner from '../../components/Banner/Banner';
import Newsletter from '../../components/Newsletter/Newsletter';
import Offer from '../../components/Offer/Offer';
import Quote from '../../components/Quote/Quote';
import TrendingProduct from '../../components/TrendingProduct/TrendingProduct';
import './HomePage.scss';

function HomePage() {
    return (
        <div className='home'>
            <Banner />
            <Offer />
            <TrendingProduct />
            <Newsletter />
            <Quote />
        </div>
    );
}

export default HomePage;
