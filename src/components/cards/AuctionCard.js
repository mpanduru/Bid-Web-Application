import React from 'react'
import myActions from "../../images/keyboardgavel.jpg";
import How_To_Bid from "../../images/how_to.jpg";
import auctioneerDirectory from "../../images/actioneers.jpg";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export const AuctionCard = () => {
    return (
        <div>
            <div>
                <div class="content position-relative start-0 mt-4 ms-4 h-75 w-50 rounded">
                    <a href="/bid-now">
                        <div class="content-overlay"></div>
                        <img class="content-image w-100" src={myActions} />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title"></h3>
                            <p class="content-text fs-1"><i class="fa fa-map-marker"></i>BID NOW</p>
                        </div>
                    </a>
                </div>
                <div class="content position-relative end-0 mt-4 ms-4 h-25 w-45 rounded">
                    <a href="/how-to-buy">
                        <div class="content-overlay"></div>
                        <img class="content-image" src={How_To_Bid} />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title"></h3>
                            <p class="content-text fs-1"><i class="fa fa-map-marker"></i>HOW TO BUY?</p>
                        </div>
                    </a>
                </div><div class="content position-relative end-0 mt-3 ms-4 h-25 w-45 rounded">
                    <a href="/auctioneer-directory">
                        <div class="content-overlay"></div>
                        <img class="content-image" src={auctioneerDirectory} />
                        <div class="content-details fadeIn-bottom">
                            <h3 class="content-title"></h3>
                            <p class="content-text fs-1"><i class="fa fa-map-marker"></i>AUCTIONEER DIRECTORY</p>
                        </div>
                    </a>
                </div>
            </div >
        </div>
    );
}