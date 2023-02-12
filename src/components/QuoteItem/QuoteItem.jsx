import React from 'react';
import './QuoteItem.scss';

function QuoteItem({ decs, name, role }) {
    return (
        <div className='quote_item'>
            <div className='quote_icon'>
                <i className='fa-solid fa-quote-left'></i>
            </div>
            <p>" {decs} "</p>
            <h3>{name}</h3>
            <span>{role}</span>
        </div>
    );
}

export default QuoteItem;
