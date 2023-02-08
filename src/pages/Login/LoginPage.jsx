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
                        {/* <i class='fas fa-user'></i>
                        <label htmlFor=''>User Name</label>
                        <input type='text' required /> */}
                        <input type='text' required />
                        <span>User Name</span>
                    </div>
                    <div className='login_input'>
                        {/* <label htmlFor=''>Password</label>
                        <i class='fas fa-lock'></i>
                        <input type='password' required /> */}
                        <input type='password' required />
                        <span>Password</span>
                    </div>

                    <NavLink to='/' className='login_button'>
                        Login
                    </NavLink>
                    <NavLink to='/signup' className='login_button'>
                        SignUp
                    </NavLink>

                    
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
