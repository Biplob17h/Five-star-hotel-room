import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import HotelLogo from './../../images/Hotel-Logo.png'
import './Header.css'

const Header = () => {
    const { user , logOut} = useContext(AuthContext)
    return (
        <div className='header'>
            <div className='header-img'>
                <img src={HotelLogo} alt="" />
            </div>
            <div className='hotel-link'>
                <Link to='/'>Home</Link>
                <Link to='/rooms'>Rooms</Link>
                {
                    user?.email ? <Link onClick={logOut}>Log Out</Link>
                    : <>
                            <Link to='/login'>login</Link>
                            <Link to='/regester'>Regester</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;