import React, { useContext } from 'react'
import { collection, query, where } from 'firebase/firestore';
import { useCollection, useCollectionOnce } from 'react-firebase-hooks/firestore';
import { firestore } from '../firebase';
import { json } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export function FirestoreContextGetQuery(collectionName, field, separator, expectedValue, array, searchedField) {
    const usersRef = collection(firestore, collectionName);
    const q = query(usersRef, where(field, separator, expectedValue));

    const [value, loading, error] = useCollection(
        q,
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const addCurrentFieldArray = (val) => {
        array.push(val);
    }

    return (
        <>
            {error && <strong></strong>}
            {loading && <span></span>}
            {value && (
                <span>
                    {value.docs.map((doc) => (
                        addCurrentFieldArray(doc.get(searchedField))
                    ))}
                </span>
            )}
        </>
    )
}

export function FirestoreContextGetID(collectionName, array) {
    const usersRef = collection(firestore, collectionName);

    const [value, loading, error] = useCollection(
        usersRef,
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const addCurrentFieldArray = (val) => {
        array.push(val);
    }

    return (
        <>
            {error && <strong>Error</strong>}
            {loading && <span>Loading...</span>}
            {value && (
                <span>
                    {value.docs.map((doc) => (
                        addCurrentFieldArray(doc.id)
                    ))}
                </span>
            )}
        </>
    )
}

export function FirestoreContextGetCollection(collectionName, array, searchedField) {
    const usersRef = collection(firestore, collectionName);

    const [value, loading, error] = useCollection(
        usersRef,
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const addCurrentFieldArray = (val) => {
        array.push(val);
    }

    return (
        <>
            {error && <strong>Error</strong>}
            {loading && <span>Loading...</span>}
            {value && (
                <span>
                    {value.docs.map((doc) => (
                        addCurrentFieldArray(doc.get(searchedField))
                    ))}
                </span>
            )}
        </>
    )
}

export const updatePrice = (title, element) => {
    const myarray = [];

    try {
        FirestoreContextGetID('auctions', 'title', '==', title, myarray);
    } catch (error) {
        console.log(error)
    }

    return (
        <div>
            {element = myarray[0]}
        </div>
    )
}