import React, {useContext, useState} from 'react'
import { AuctionAdd } from '../cards/AuctionAdd';

export const BidNowPage = () => {

    return (
        <div className='py-5'>
            <div className='container'>
                <AuctionAdd />
            </div>
        </div>
    )
}
