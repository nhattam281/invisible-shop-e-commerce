import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Banner from '../../components/Banner/Banner';
import Countdown from '../../components/Countdown/Countdown';
import Newsletter from '../../components/Newsletter/Newsletter';
import Offer from '../../components/Offer/Offer';
import Quote from '../../components/Quote/Quote';
import TrendingProduct from '../../components/TrendingProduct/TrendingProduct';
import { fetchProducts } from '../../redux/Slice/productSlice';
import './HomePage.scss';

function HomePage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    return (
        <div className='home'>
            <Banner />
            <Offer />
            <Countdown />
            <TrendingProduct />
            <Newsletter />
            <Quote />
        </div>
    );
}

export default HomePage;
