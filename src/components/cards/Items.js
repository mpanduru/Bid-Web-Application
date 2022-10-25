import React, { useState } from 'react'
import { AuctionItem } from './AuctionItem'
import { FirestoreContextGetCollection, FirestoreContextGetID } from '../../context/FirestoreContext'
import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '../../firebase'


export const Items = () => {
    const [imageList, setImageList] = useState([]);
    const [refreshimages, setRefreshImages] = useState(true);

    const AllItemTitles = [];
    FirestoreContextGetCollection('auctions', AllItemTitles, 'title')
    const AllItemDescriptions = [];
    FirestoreContextGetCollection('auctions', AllItemDescriptions, 'description')
    const AllItemStartPrices = [];
    FirestoreContextGetCollection('auctions', AllItemStartPrices, 'startPrice')
    const AllItemBuyNow = [];
    FirestoreContextGetCollection('auctions', AllItemBuyNow, 'buynow')
    const AllItemIDS = [];
    FirestoreContextGetID('auctions', AllItemIDS)
    const AllItemActive = [];
    FirestoreContextGetCollection('auctions', AllItemActive, 'active')
    const AllItemHighestBidder = [];
    FirestoreContextGetCollection('auctions', AllItemHighestBidder, 'currentHighestBidder')
    const AllItemOwner = [];
    FirestoreContextGetCollection('auctions', AllItemOwner, 'owner')

    if (AllItemTitles.length != 0 && refreshimages)
        for (let i = 0; i < AllItemTitles.length; i++) {
            getDownloadURL(ref(storage, AllItemTitles[i] + ".jpg")).then((url) => {
                setImageList((prev) => [...prev, [AllItemTitles[i], AllItemDescriptions[i], AllItemStartPrices[i], AllItemBuyNow[i], AllItemIDS[i], AllItemActive[i], AllItemHighestBidder[i], AllItemOwner[i], url]])
                setRefreshImages(false);
            })
        }

    const actualItems = imageList.slice(0, imageList.length / 2);
    return (
        <div>
            <h1 className="d-flex text-dark justify-content-center my-3">Items</h1>
            {actualItems.map(([title, description, startprice, buynow, id, active, bidder, owner, url]) => {
                if (active)
                    return AuctionItem(url, title, description, startprice, buynow, bidder, owner, id)
            })}
        </div >
    )
}
