import React from 'react';
import './OfferItem.scss';

function OfferItem({ icon, title, decs }) {
    return (
        <div className='offer_items'>
            <div className='offer_icon'>
                <i className={icon} />
            </div>
            <h3>{title}</h3>
            <p>{decs}</p>
        </div>
    );
}

export default OfferItem;
