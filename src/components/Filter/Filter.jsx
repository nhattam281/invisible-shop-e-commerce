import React, { useState } from 'react';
import './Filter.scss';

const filterCategory = [
    'all category',
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration',
    'furniture',
    'tops',
    'womens-dresses',
    'womens-shoes',
    'mens-shirts',
    'mens-shoes',
    'mens-watches',
    'womens-watches',
    'womens-bags',
    'womens-jewellery',
    'sunglasses',
    'automotive',
    'motorcycle',
    'lighting',
];
function Filter({ onClick = () => {} }) {
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [filterTitle, setFilterTitle] = useState('Category');

    const handleShowDropdown = (e) => {
        setShowFilterDropdown(!showFilterDropdown);
        setFilterTitle(e.target.textContent);
    };

    return (
        <div className='filter'>
            <div className='filter_dropdown' onClick={handleShowDropdown}>
                <span>{filterTitle}</span>
                <i className='fa fa-caret-down'></i>
            </div>

            {showFilterDropdown && (
                <div
                    className='filter_dropdown-list'
                    onClick={handleShowDropdown}
                >
                    {filterCategory.map((value, index) => (
                        <div
                            key={index}
                            className='filter_dropdown-item'
                            onClick={onClick}
                        >
                            {value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Filter;
