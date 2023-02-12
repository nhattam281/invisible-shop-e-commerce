import React from 'react';
import QuoteItem from '../QuoteItem/QuoteItem';
import './Quote.scss';

const quote = {
    decs: 'Congue condimentum et non eu arcu sociis aenean vivamus quisque. Porta purus urna. Massa id blandit enim cursus ante, nec consectetuer imperdiet ipsum',
    name: 'Nhat Tam',
    role: 'customer',
};

function Quote() {
    return (
        <div className='quote'>
            <QuoteItem decs={quote.decs} name={quote.name} role={quote.role} />
            <QuoteItem decs={quote.decs} name={quote.name} role={quote.role} />
            <QuoteItem decs={quote.decs} name={quote.name} role={quote.role} />
        </div>
    );
}

export default Quote;
