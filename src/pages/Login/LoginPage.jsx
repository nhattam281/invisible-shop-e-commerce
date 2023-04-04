import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import bgSVG from '../../assets/svg/bg.svg';
import { auth } from '../../firebase';
import './LoginPage.scss';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, username, password);
            navigate('/');
        } catch (err) {
            console.error();
            setError('Email or password incorrect!');
        }
    };

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
                        <input
                            type='emails'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <span>User Email</span>
                    </div>
                    <div className='login_input'>
                        <input
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span>Password</span>
                    </div>
                    <span className='login_error'>{error}</span>
                    <NavLink
                        to='/'
                        className='login_button'
                        onClick={handleLogin}
                    >
                        Login
                    </NavLink>
                    <NavLink to='/signup' className='login_button'>
                        New User?
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
