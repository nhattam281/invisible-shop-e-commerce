import React from 'react';
import './Newsletter.scss';

function Newsletter() {
    return (
        <div className='newsletter'>
            <h1>Newsletter</h1>
            <span>Get timely updates from your favorite products.</span>
            <div className='newsletter_input'>
                <input type='email' placeholder='Your email...' />
                <button>
                    <i className='fa-solid fa-paper-plane'></i>
                </button>
            </div>
        </div>
    );
}

export default Newsletter;
