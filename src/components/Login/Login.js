import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import './Login.css'

const Login = () => {
    const { googleSignIn, logIn } = useContext(AuthContext)
    const [errorMassges, setErrorMassges] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const handleSignInSubmit = event => {
        setErrorMassges('')
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then((result) => {
                const user = result.user
                console.log('user login successfully', user)
                navigate(from, { replace: true })
                form.reset()
            })
            .catch((error) => {
                const errorCode = error.code;
                setErrorMassges(errorCode)
                console.log(error)
            })

    }
    const handleGoogleSignIn = () => {

        googleSignIn()
            .then((result) => {
                const user = result.user
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch((error) => {
                console.error('error', error)
            })
    }
    return (
        <div className='from-container'>
            <h4 className='from-title'>LOG IN</h4>
            <form onSubmit={handleSignInSubmit}>
                <div className="from-contorl">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="from-contorl">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <p className='error'>{errorMassges}</p>
                <input onClick={handleGoogleSignIn} className='google-btn' value="Goole Sign In" />
                <input className='login-btn-submit' type="submit" value="Login" />
                <p className='form-new-account'>Don't have a account? <Link to='/regester'>Create New Account</Link></p>
            </form>
        </div>
    );
};

export default Login