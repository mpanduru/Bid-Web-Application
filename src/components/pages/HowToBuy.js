import { React, useRef, useState, useContext } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { query, collection, where } from 'firebase/firestore'
import { firestore } from '../../firebase'
import { AuthContext } from '../../context/AuthContext';
import { FirestoreContextGetQuery } from '../../context/FirestoreContext';

export const HowToBuy = () => {
    const { currentUser } = useContext(AuthContext);

    const myArray = [];
    try {
        FirestoreContextGetQuery('users', 'email', '==', currentUser.email, myArray, 'ROLE');
    } catch (error) {
        console.log(error)
    }
    return (
        <>
            {
                myArray[0] == 'CLIENT' ?
                    <div>YOU ARE A CLIENT</div>
                    :
                    <div>YOU ARE AN ADMIN</div>
            }
        </>
    )
}
