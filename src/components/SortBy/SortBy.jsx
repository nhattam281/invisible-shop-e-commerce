import React, { useState } from 'react';
import './SortBy.scss';

const sortBy = [
    'Default',
    'Name A - Z',
    'Name Z - A',
    'Price Low - High',
    'Price High - Low',
];

function SortBy({ onClick = () => {} }) {
    const [showSortByDropdown, setShowSortByDropdown] = useState(false);
    const [sortTitle, setSortTitle] = useState('Sort by');

    const handleShowDropdown = (e) => {
        setShowSortByDropdown(!showSortByDropdown);
        setSortTitle(e.target.textContent);
    };
    return (
        <div className='sortby'>
            <div className='sortby_dropdown' onClick={handleShowDropdown}>
                <span>{sortTitle}</span>
                <i className='fa fa-caret-down'></i>
            </div>

            {showSortByDropdown && (
                <div
                    className='sortby_dropdown-list'
                    onClick={handleShowDropdown}
                >
                    {sortBy.map((value, index) => (
                        <div
                            key={index}
                            className='sortby_dropdown-item'
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

export default SortBy;
