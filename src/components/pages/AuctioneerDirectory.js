import React from 'react';
import { getStorage, storageRef } from 'firebase/storage';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { ref } from 'firebase/storage';
import { storage } from '../../firebase';
import { UserCard } from '../cards/UserCard';
import { FirestoreContextGetCollection } from '../../context/FirestoreContext';

export const AuctioneerDirectory = () => {

    const AllUserNames = [];
    FirestoreContextGetCollection('users', AllUserNames, 'name')
    const AllUserEmails = [];
    FirestoreContextGetCollection('users', AllUserEmails, 'email')
    const AllUserLocations = [];
    FirestoreContextGetCollection('users', AllUserLocations, 'location')
    const AllUserRoles = [];
    FirestoreContextGetCollection('users', AllUserRoles, 'role')

    const Cards = [];

    for (let i = 0; i < AllUserNames.length; i++) {
        Cards.push(UserCard(AllUserEmails[i], AllUserLocations[i], AllUserNames[i], AllUserRoles[i]))
    }

    return (
        <div>
            <h1 className="d-flex text-dark justify-content-center my-3">Auctioneers from our site</h1>
            {Cards}
        </div >
    )
};