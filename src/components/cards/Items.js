import React, { useEffect, useState } from 'react'
import { AuctionItem } from './AuctionItem'
import { FirestoreContextGetCollection, getCollectionData } from '../../context/FirestoreContext'
import { StorageContext } from '../../context/StorageContext'
import { listAll, ref, getDownloadURL } from 'firebase/storage'
import { storage } from '../../firebase'


export const Items = () => {
    const [imageList, setImageList] = useState([]);
    const [refreshimages, setRefreshImages] = useState(true);

    const AllItemTitles = [];
    FirestoreContextGetCollection('auctions', AllItemTitles, 'title')
    const AllItemDescriptions = [];
    FirestoreContextGetCollection('auctions', AllItemDescriptions, 'description')
    const AllItemStartPrices = [];
    FirestoreContextGetCollection('auctions', AllItemStartPrices, 'startduration')
    const AllItemBuyNow = [];
    FirestoreContextGetCollection('auctions', AllItemBuyNow, 'startduration')

    if (AllItemTitles.length != 0 && refreshimages)
        for (let i = 0; i < AllItemTitles.length; i++) {
            getDownloadURL(ref(storage, AllItemTitles[i] + ".jpg")).then((url) => {
                setImageList((prev) => [...prev, [AllItemTitles[i], AllItemDescriptions[i], AllItemStartPrices[i], AllItemBuyNow[i], url]])
                setRefreshImages(false);
            })
        }

    const actualItems = imageList.slice(0, imageList.length / 2);
    return (
        <div>
            <h1 className="d-flex text-dark justify-content-center my-3">Items</h1>
            {actualItems.map(([title, description, startprice, buynow, url]) => {
                return AuctionItem(url, title, description, startprice, buynow)
            })}
        </div >
    )
}
