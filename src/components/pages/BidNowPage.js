import React, { useContext, useState } from 'react'
import { AuctionAdd } from '../cards/AuctionAdd';
import { Items } from '../cards/Items';

export const BidNowPage = () => {

    return (
        <div>
            <AuctionAdd />
            <Items />
        </div>
    )
}
