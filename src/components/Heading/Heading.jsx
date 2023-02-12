import React from 'react';
import './Heading.scss';

function Heading({ title }) {
    return (
        <div className='heading'>
            <div className='heading_container'>
                <h2>{title}</h2>
                <div className='heading_button'>
                    <button>Previos</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Heading;
