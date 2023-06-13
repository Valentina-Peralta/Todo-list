import React from 'react';
import '../Stylesheets/Register.css'

function Register() {
    return (
        <div className='register'>
            <form className='register-form'>
                <p>
                    <span>Log in</span>
                    <span>Sign up</span>
                </p>
                <label htmlFor="email">Email</label>
                <input type="text" />
                <label htmlFor="password">Password</label>
                <input type="password" />
                <button type='submit'>LOGIN</button>
            </form>
        </div>
    )
}

export default Register