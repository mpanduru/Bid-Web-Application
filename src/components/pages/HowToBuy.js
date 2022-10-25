import { React, useRef, useState, useContext } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { query, collection, where } from 'firebase/firestore'
import { firestore } from '../../firebase'
import { AuthContext } from '../../context/AuthContext';
import { FirestoreContextGetQuery } from '../../context/FirestoreContext';

export const HowToBuy = () => {
    return (
        <div>
            <div className='row d-flex justify-context-center'>
                <h1>1. Browse</h1>
                <div className='fs-4 fw-light'>
                    <p>Find the object you want to buy by searching for it, browsing by category or by browsing auctioneers’ online catalogues.
                    </p>
                    <p>
                        You can contact the auction house to ask questions about the item you are interested in, or if you live nearby you can go along to a viewing at their premises and see the item for yourself. A key thing to remember is that at an auction it is up to you as the bidder to satisfy yourself about the condition of an item before you bid. Read the lot description, check the photos and if you need more information the auction house will be happy to help you.
                    </p>
                </div>
            </div>
            <div className='row'>
                <h1>2. Register</h1>
                <div className='fs-4 fw-light'>
                    <p>Once you have found the item you want to bid on, register with the auction house that it is selling it. Simply click the 'Get approved to bid' button and fill in a few details about yourself and register your credit card.
                    </p>
                    <p>
                        If you haven’t already created an account on thesaleroom.com you’ll need to do that first, it only takes a moment.
                    </p>
                </div>
            </div>
            <div className='row'>
                <h1>3. Bid</h1>
                <div className='fs-4 fw-light'>
                    <p>
                        Bidding online with thesaleroom.com is easy.
                    </p>
                    <p>
                        A convenient option is to place a maximum bid before the auction starts. This is the highest amount you are willing to pay for a lot. Then sit back and relax.
                    </p>
                    <p>
                        Once the auction starts, thesaleroom.com will place your bids for you, only ever bidding just enough to do keep you in the lead and it will never go beyond your limit. If nobody else bids more than your maximum bid then you will win the lot.
                    </p>
                    <p>
                        Alternatively, you can bid live during the auction. You can do this on your PC, tablet or mobile phone. You’ll be joining the thrill of the event and competing against other buyers in real time. You will be able to see and hear the auction as it progresses and place your bids as the items you want to buy come up.
                    </p>
                    <p>
                        You place your bid by clicking the Bid Live Now button.
                    </p>
                    <p>
                        Wait for the amount you want to bid to appear on the screen and click the blue bid button. If you are the highest bidder, the button will turn green. If you are outbid, the blue button will reappear and you can have another go.
                    </p>
                </div>
            </div>
            <div className='row'>
                <h1>4. Pay and take it away or get it delivered</h1>
                <div className='fs-4 fw-light'>
                    <p>
                        If you are the successful bidder, then the item is yours, congratulations! The auction house will usually contact you to arrange payment once the auction has ended or you can contact them. Some will provide a way to pay online, others will take payment by card or bank transfer.
                    </p>
                    <p>
                        Then you either go to the auction house and pick up your item or you can get it delivered to you.
                    </p>
                    <p>
                        Some auction houses will offer a packing and delivery service, others will not. Most auction houses will recommend local or national courier companies that will pack, pick up and deliver your item to you. There will be a charge for any packing and delivery service that you use. Read our guide to auction delivery to learn more.
                    </p>
                </div>
            </div>
        </div>
    )
}
