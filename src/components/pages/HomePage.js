import React from 'react';
import { AuctionCard } from '../cards/AuctionCard';
import { AboutUs } from '../cards/AboutUs';

export const HomePage = () => {
    return (
        <div className=''>
            <div>
                < AuctionCard />
                <AboutUs />
            </div>
        </div >
    )
}
