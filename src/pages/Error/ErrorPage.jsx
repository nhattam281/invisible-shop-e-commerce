import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.scss';

function ErrorPage() {
    return (
        <div className='error'>
            <h2>Opps! Page not found.</h2>
            <h1>404</h1>
            <p>We can't find the page you're looking for.</p>
            <Link to={'/'} className='error_button'>
                Back to home
            </Link>
        </div>
    );
}

export default ErrorPage;
