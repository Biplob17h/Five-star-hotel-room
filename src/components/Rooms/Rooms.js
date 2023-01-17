import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';
import './Rooms.css'

const Rooms = () => {
    const [rooms, setRooms] = useState([])

    useEffect(()=>{
        fetch('room.json')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])
    return (
        <div>
            <h1>You can book your Room here</h1>
            <div className='rooms'>
                {
                    rooms.map(room => <Room 
                        key={room.id}
                        room = {room}
                    ></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;