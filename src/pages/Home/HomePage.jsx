import React from 'react';
import Banner from '../../components/Banner/Banner';
import Offer from '../../components/Offer/Offer';
import Quote from '../../components/Quote/Quote';
import './HomePage.scss';

function HomePage() {
    return (
        <div className='home'>
            <Banner />
            <Offer />
            <Quote />
        </div>
    );
}

export default HomePage;
