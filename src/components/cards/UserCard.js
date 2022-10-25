import React, { useContext, useRef } from 'react';
import '../../App.css';

export const UserCard = (email, location, name, role) => {

    return (
        <div className='d-flex justify-content-center'>
            <div className="card col-10 m-5 w-50">
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Email: {email}</p>
                    <p className='card-text'>Location: {location}</p>
                    <p className='card-text'>ROLE: {role}</p>
                </div>
            </div>
        </div>
    )
}