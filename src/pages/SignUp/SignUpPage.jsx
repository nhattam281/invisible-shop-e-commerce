import React from 'react';
import { NavLink } from 'react-router-dom';
import bgSVG from '../../assets/images/bg.svg';
import './SignUpPage.scss';

function SignUpPage() {
    return (
        <div className='signup'>
            <div className='signup_container'>
                <div className='signup_container-background'>
                    <img
                        src={bgSVG}
                        alt='inviShop.'
                        className='signup_container-background-img'
                    />
                </div>
                <div className='signup_container-form'>
                    <h1>signup</h1>
                    <div className='signup_input'>
                        <input type='text' required />
                        <span>User Name</span>
                    </div>
                    <div className='signup_input'>
                        <input type='password' required />
                        <span>Password</span>
                    </div>
                    <div className='signup_input'>
                        <input type='password' required />
                        <span>Re-enter password</span>
                    </div>

                    <NavLink to='/login' className='signup_button'>
                        SignUp
                    </NavLink>
                    {/* <NavLink to='/login' className='signup_button'>
                        Login
                    </NavLink> */}

                    <div className='signup_have-account'>
                        <span>Have account?</span>
                        <NavLink
                            to='/login'
                            className='signup_have-account-link'
                        >
                            Click here
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
