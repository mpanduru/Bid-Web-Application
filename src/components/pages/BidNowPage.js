import React, { useContext, useState } from 'react'
import { AuctionAdd } from '../cards/AuctionAdd';
import { BidAuction } from '../cards/BidAuction';
import { Items } from '../cards/Items';

export const BidNowPage = () => {

    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <AuctionAdd />
                </div>
                <div className='col'>
                    <BidAuction />
                </div>
            </div>
            <Items />
        </div>
    )
}
