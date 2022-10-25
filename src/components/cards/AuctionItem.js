import React, { useContext } from 'react';
import '../../App.css';
import { AuthContext } from '../../context/AuthContext';

export const AuctionItem = (imageName, title, description, startpice, buynow) => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className='d-flex justify-content-center'>
            <div className="card scale-on-hover col-10 m-5 w-50">
                <img className="card-img-top img-sizer" src={imageName} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">Current price: {startpice}</small></p>
                    <p className="card-text"><small className="text-muted">Buy now price: {buynow}</small></p>
                    {currentUser ?
                        <div className='row'>
                            <p className='btn btn-secondary col me-5 ms-5'>Auction!</p>
                            <p className='btn btn-primary ms-5 me-5 col'>Buy Now!</p>
                        </div>
                        :
                        <div></div>
                    }
                </div>
            </div>
        </div>
    )
}

