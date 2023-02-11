import React from 'react';
import OfferItem from '../OfferItem/OfferItem';
import './Offer.scss';

const data = [
    {
        icon: 'fa-solid fa-truck-fast',
        title: 'Worldwide Delivery',
        decs: 'We offer competitive prices on our 100 million plus product any range.',
    },
    {
        icon: 'fa-solid fa-id-card',
        title: 'Safe Payment',
        decs: 'We offer competitive prices on our 100 million plus product any range.',
    },
    {
        icon: 'fa-solid fa-shield',
        title: 'Shop With Confidence ',
        decs: 'We offer competitive prices on our 100 million plus product any range.',
    },
    {
        icon: 'fa-solid fa-headset',
        title: '24/7 Support ',
        decs: 'We offer competitive prices on our 100 million plus product any range.',
    },
];

function Offer() {
    return (
        <div className='offers'>
            {data.map((value, index) => {
                return (
                    <OfferItem
                        key={index}
                        icon={value.icon}
                        title={value.title}
                        decs={value.decs}
                    />
                );
            })}
        </div>
    );
}

export default Offer;
