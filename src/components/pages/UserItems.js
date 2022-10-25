import React, { useState, useContext } from 'react'
import { BoughtItem } from '../cards/BoughtItem'
import { FirestoreContextGetCollection, getCollectionData } from '../../context/FirestoreContext'
import { ref, getDownloadURL } from 'firebase/storage'
import { storage } from '../../firebase'
import { updateCurrentUser } from 'firebase/auth'
import { AuthContext } from '../../context/AuthContext'


export const UserItems = () => {
    const [imageList, setImageList] = useState([]);
    const [refreshimages, setRefreshImages] = useState(true);

    const { currentUser } = useContext(AuthContext)

    const AllItemTitles = [];
    FirestoreContextGetCollection('auctions', AllItemTitles, 'title')
    const AllItemDescriptions = [];
    FirestoreContextGetCollection('auctions', AllItemDescriptions, 'description')
    const AllBoughtBy = [];
    FirestoreContextGetCollection('auctions', AllBoughtBy, 'boughtBy')

    if (AllItemTitles.length != 0 && refreshimages)
        for (let i = 0; i < AllItemTitles.length; i++) {
            getDownloadURL(ref(storage, AllItemTitles[i] + ".jpg")).then((url) => {
                setImageList((prev) => [...prev, [AllItemTitles[i], AllItemDescriptions[i], AllBoughtBy[i], url]])
                setRefreshImages(false);
            })
        }
    const actualItems = imageList.slice(0, imageList.length / 2);
    return (
        <div>
            <h1 className="d-flex text-dark justify-content-center my-3">My Bought Items</h1>
            {actualItems.map(([title, description, boughtby, url]) => {
                if (boughtby == currentUser.email)
                    return BoughtItem(url, title, description)
            })}
        </div >
    )
}
