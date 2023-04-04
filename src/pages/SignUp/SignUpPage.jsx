import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import bgSVG from '../../assets/svg/bg.svg';
import './SignUpPage.scss';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function SignUpPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [comfirmPassword, setComfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, username, password);
            alert('Sign up Successfully!');
            navigate('/login');
        } catch (err) {
            console.error();
        }
    };

    useEffect(() => {
        if (password !== comfirmPassword)
            setError('Confirm password incorrect');
        else setError('');
        console.log('asda');
    }, [password, comfirmPassword]);

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
                        <input
                            type='text'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <span>User Email</span>
                    </div>
                    <div className='signup_input'>
                        <input
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span>Password</span>
                    </div>
                    <div className='signup_input'>
                        <input
                            type='password'
                            required
                            value={comfirmPassword}
                            onChange={(e) => setComfirmPassword(e.target.value)}
                        />
                        <span>Confirm</span>
                    </div>

                    <span className='signup_error'>{error}</span>

                    <NavLink
                        to='/login'
                        className='signup_button'
                        onClick={handleSignUp}
                    >
                        SignUp
                    </NavLink>

                    <div className='signup_have-account'>
                        <span>Have an account?</span>
                        <NavLink
                            to='/login'
                            className='signup_have-account-link'
                        >
                            Sign in
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
