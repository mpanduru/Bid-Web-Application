import React from 'react'
import myActions from "../../images/keyboardgavel.jpg";
import How_To_Bid from "../../images/how_to.jpg";
import auctioneerDirectory from "../../images/actioneers.jpg";
import "../../App.css"

export const AuctionCard = () => {
    return (
        <div className='overflow-hidden'>
            <div className="content position-relative start-0 mt-4 ms-4 h-75 w-50 rounded overflow-hidden">
                <a href="/bid-now">
                    <div className="content-overlay"></div>
                    <img className="content-image w-100" src={myActions} />
                    <div className="content-details fadeIn-bottom">
                        <h3 className="content-title"></h3>
                        <p className="content-text fs-1"><i className="fa fa-map-marker"></i>BID NOW</p>
                    </div>
                </a>
            </div>
            <div className="content position-relative end-0 mt-4 ms-4 h-25 w-45 rounded overflow-hidden">
                <a href="/how-to-buy">
                    <div className="content-overlay"></div>
                    <img className="content-image" src={How_To_Bid} />
                    <div className="content-details fadeIn-bottom">
                        <h3 className="content-title"></h3>
                        <p className="content-text fs-1"><i className="fa fa-map-marker"></i>HOW TO BUY?</p>
                    </div>
                </a>
            </div><div className="content position-relative end-0 mt-3 ms-4 h-25 w-45 rounded overflow-hidden">
                <a href="/auctioneer-directory">
                    <div className="content-overlay"></div>
                    <img className="content-image" src={auctioneerDirectory} />
                    <div className="content-details fadeIn-bottom">
                        <h3 className="content-title"></h3>
                        <p className="content-text fs-1"><i className="fa fa-map-marker"></i>AUCTIONEER DIRECTORY</p>
                    </div>
                </a>
            </div>
            <div></div>
        </div >
    );
}