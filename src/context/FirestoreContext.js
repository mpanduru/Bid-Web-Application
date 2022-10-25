import React from 'react'
import { collection, query, where } from 'firebase/firestore';
import { useCollection, useCollectionOnce } from 'react-firebase-hooks/firestore';
import { firestore } from '../firebase';
import { json } from 'react-router-dom';

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
