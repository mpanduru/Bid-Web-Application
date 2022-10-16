import { collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../../firebase';

export const AuctioneerDirectory = () => {

    const [value, loading, error] = useCollection(
        collection(firestore, 'users'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    return (
        <div>
            <p>
                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {loading && <span>Collection: Loading...</span>}
                {value && (
                    <span>
                        Collection:{' '}
                        {value.docs.map((doc) => (
                            <React.Fragment key={doc.id}>
                                {JSON.stringify(doc.data())},{' '}
                            </React.Fragment>
                        ))}
                    </span>
                )}
            </p>
        </div>
    );
};
