import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import bgSVG from '../../assets/svg/bg.svg';
import './SignUpPage.scss';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function SignUpPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, username, password);
            navigate('/login');
        } catch (err) {
            console.error();
        }
    };
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
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span>Password</span>
                    </div>
                    <div className='signup_input'>
                        <input type='password' required />
                        <span>Confirm</span>
                    </div>

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
