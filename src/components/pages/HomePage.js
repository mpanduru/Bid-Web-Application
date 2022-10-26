import React, { useContext } from 'react';
import { AuctionCard } from '../cards/AuctionCard';
import { AboutUs } from '../cards/AboutUs';
import { AuthContext } from '../../context/AuthContext';
import { FirestoreContextGetQuery } from '../../context/FirestoreContext';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {

    return (
        <div className=''>
            <div>
                <AuctionCard />
                <AboutUs />
            </div>
        </div >
    )
}
