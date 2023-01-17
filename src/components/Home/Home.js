import React, { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import './Home.css'

const Home = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div className='home'>
            <h1 >Wellcome to Home</h1>
            {user?.email && 
            <h2>{user.email}</h2>}
            <h2>Please enjoy your stay</h2>
        </div>
    );
};

export default Home;