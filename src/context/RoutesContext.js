import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "../components/pages/HomePage";
import { HowToBuy } from "../components/pages/HowToBuy";
import { BidNowPage } from '../components/pages/BidNowPage';
import { AuctioneerDirectory } from '../components/pages/AuctioneerDirectory';
import { UserItems } from '../components/pages/UserItems';
import { AdminPannel } from '../components/pages/AdminPannel';

export const RoutesContext = () => {
    const location = useLocation();
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-to-buy" element={<HowToBuy />} />
            <Route path="/how-to-buy/:id" element={<HowToBuy />} />
            <Route path="/bid-now" element={<BidNowPage />} />
            <Route path="/auctioneer-directory" element={<AuctioneerDirectory />} />
            <Route path='/my-items' element={<UserItems />} />
            <Route path='/adminpannel' element={<AdminPannel />} />
        </Routes>
    )
}
