import React from 'react';
import './Loading.scss';

//spinner
import { HashLoader } from 'react-spinners';

function Loading() {
    const color = '#2ea5a2';
    return (
        <div className='loading'>
            <HashLoader color={color} />
        </div>
    );
}

export default Loading;
