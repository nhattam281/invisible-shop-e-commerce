import React, { useState } from 'react';
import './Filter.scss';

const filterCategory = [
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

    const handleShowDropdown = () => {
        setShowFilterDropdown(!showFilterDropdown);
    };

    return (
        <div className='filter'>
            <div className='filter_dropdown' onClick={handleShowDropdown}>
                <span>Category</span>
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
            {/* <div className='filter_container'>
                <div className='filter_widget-category'>
                    <select>
                        <option>Category</option>
                        <option value='smartphones'>home-decoration</option>
                        <option value='laptops'>womens-jewellery</option>
                        <option value='dress'>dress</option>
                        <option value='clothe'>clothe</option>
                    </select>
                </div>
                <div>
                    <div className='filter_widget-details'>
                        <select>
                            <option>Sort by</option>
                            <option value='smartphones'>name - A to Z</option>
                            <option value='laptops'>name - z to a</option>
                            <option value='dress'>price - low to high</option>
                            <option value='clothe'>price - high top low</option>
                        </select>
                    </div>
    
                    <div className='filter_widget-searchbox'>
                        <i className='fa-solid fa-magnifying-glass'></i>
                        <input type='text' placeholder='Search product...' />
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Filter;
