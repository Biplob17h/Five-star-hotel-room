import { updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import './Regester.css'
import {getAuth} from 'firebase/auth'
import app from '../../firebase/firebase.config';

const auth = getAuth(app)

const Regester = () => {
    const {googleSignIn, createUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegesterFromSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then((result)=>{
            const user = result.user
            console.log('user created successfully', user)
            navigate('/')
            updateUserName(name)
            form.reset()
        })
        .catch((error)=>{
            console.log('error', error)
        })
    }

    const handleGoogleSignIn =() =>{

        googleSignIn()
        .then((result)=>{
            const user = result.user
            console.log(user)
        })
        .catch((error)=>{
            console.error('error', error)
        })
    }

    const updateUserName = (name) =>{
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(()=>{
            console.log(auth.currentUser)
        })
        .catch((error)=>{
            console.log('error', error)
        })
    }
    
    return (
        <div className='from-container'>
            <h4 className='from-title'>REGESTER</h4>
            <form onSubmit={handleRegesterFromSubmit}>
                <div className="from-contorl">
                    <label htmlFor="name">User Name</label>
                    <input type="text" name="name" required />
                </div>
                <div className="from-contorl">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="from-contorl">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>

                <input onClick={handleGoogleSignIn} className='google-btn'value="Goole Sign In" />
                <input className='login-btn-submit' type="submit" value="Sign Up" />
                <p className='form-new-account'>Already have an account? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Regester;