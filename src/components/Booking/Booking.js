import React from 'react';
import './Booking.css'
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <div>
            <h1>Booking complete. Thanks for Choosing Us</h1>
            <br /><br />
            <Link className='link' to='/'>Go back to Home</Link>
        </div>
    );
};

export default Booking;