import React, { useContext, useRef } from 'react';
import { Form } from 'react-bootstrap';
import '../../App.css';
import { AuthContext } from '../../context/AuthContext';
import { firestore } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export const AuctionItem = (imageName, title, description, startpice, buynow, bidder, owner, id) => {

    const { currentUser } = useContext(AuthContext);

    const onbuynow = async () => {
        const userDoc = doc(firestore, "auctions", id);
        const newField = {
            active: false,
            boughtBy: currentUser.email
        };
        await updateDoc(userDoc, newField);
        window.location.reload();
    }

    const onendbid = async () => {
        const userDoc = doc(firestore, "auctions", id);
        const newField = {
            active: false,
            boughtBy: bidder
        };
        await updateDoc(userDoc, newField);
        window.location.reload();
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className="card scale-on-hover col-10 m-5 w-50">
                <img className="card-img-top img-sizer" src={imageName} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className='row'>
                        <div className='col'>
                            <p className="card-text fs-4"><small className="text-muted">Current price: {startpice} $</small></p>
                        </div>
                        <div className='col'>
                            <p className="card-text fs-4"><small className="text-muted">Highest bidder: {bidder}</small></p>
                        </div>
                    </div>
                    <p className="card-text"><small className="text-muted">Buy now price: {buynow} $</small></p>
                    <p className='card-text'><small className="text-muted fs-6">Bid ID: {id}</small></p>
                    {owner == currentUser.email && currentUser ?
                        <p className='btn btn-secondary me-5 col' onClick={onendbid}>End Bidding Now!</p>
                        :
                        <p className='btn btn-primary me-5 col' onClick={onbuynow}>Buy Now!</p>
                    }
                </div>
            </div>
        </div>
    )
}

