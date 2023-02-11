import React from 'react';
import Banner from '../../components/Banner/Banner';
import Offer from '../../components/Offer/Offer';
import './HomePage.scss';

function HomePage() {
    return (
        <div className='home'>
            <Banner />
            <Offer />
        </div>
    );
}

export default HomePage;
