import React from 'react';
import Filter from '../../components/Filter/Filter';
import SortBy from '../../components/SortBy/SortBy';
import './ShopPage.scss';

function ShopPage() {
    return (
        <div className='shop'>
            <div className='shop_banner'>
                <h2>Shop</h2>
                <span>Enjoys your shopping times</span>
            </div>
            <div className='shop_filter'>
                <Filter />
                <SortBy />
                <div className='shop_search'>
                    <i className='fa-solid fa-magnifying-glass'></i>
                    <input
                        type='text'
                        className='shop_search-item'
                        placeholder='Enter Product...'
                    />
                </div>
            </div>
        </div>
    );
}

export default ShopPage;
