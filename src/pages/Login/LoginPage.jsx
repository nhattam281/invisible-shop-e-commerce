import React from 'react';
import { NavLink } from 'react-router-dom';
import bgSVG from '../../assets/images/bg.svg';
import './LoginPage.scss';

function LoginPage() {
    return (
        <div className='login'>
            <div className='login_container'>
                <div className='login_container-background'>
                    <img
                        src={bgSVG}
                        alt='inviShop.'
                        className='login_container-background-img'
                    />
                </div>
                <div className='login_container-form'>
                    <h1>Login</h1>
                    <div className='login_input'>
                        <input type='text' required />
                        <span>User Name</span>
                    </div>
                    <div className='login_input'>
                        <input type='password' required />
                        <span>Password</span>
                    </div>

                    <NavLink to='/' className='login_button'>
                        Login
                    </NavLink>
                    <NavLink to='/signup' className='login_button'>
                        SignUp
                    </NavLink>

                    <div className='login_forgot-password'>
                        <span>Forgot password?</span>
                        <NavLink
                            to='/login'
                            className='login_forgot-password-link'
                        >
                            Coming soon
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
