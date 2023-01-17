import React from 'react';
import './Room.css'
import { FaBed, FaPeopleArrows } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
    const { img, name, bed, price, parson } = room
    return (
        <div className='room'>
            <div  className='room-2'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                </div>
                <div className='room-info'>
                    <div>
                        <p><FaBed /> {bed}</p>
                    </div>
                    <div>
                        <p><FaPeopleArrows /> {parson}</p>
                    </div>
                    <div>
                        <h4>Price :{price} </h4>
                    </div>
                </div>
            </div>
            <div className='room-bnt'>
                <Link to='/booking'><button>Book Now</button></Link>
            </div>
        </div>
    );
};

export default Room;