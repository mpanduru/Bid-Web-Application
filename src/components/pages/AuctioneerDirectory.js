import React, { useContext } from 'react';
import { getStorage, storageRef } from 'firebase/storage';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { ref } from 'firebase/storage';
import { storage } from '../../firebase';
import { UserCard } from '../cards/UserCard';
import { FirestoreContextGetCollection, FirestoreContextGetQuery } from '../../context/FirestoreContext';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

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
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const myuser = [];
    if (currentUser)
        FirestoreContextGetQuery("users", "email", "==", currentUser.email, myuser, "role");

    const goadmin = () => {
        navigate('/adminpannel');
    }

    return (
        <div> {
            currentUser ?
                (<div>
                    {myuser[0] == "ADMIN" ?
                        (<div>
                            <div className='col-md-12 text-center'>
                                <div onClick={goadmin} className="btn btn-secondary btn-rounded scale-on-hover me-3 m-5 w-75 ">
                                    ---------------------------------------------TAKE ME TO THE ADMIN PANEL ---------------------------------------------
                                </div>
                            </div>
                        </div>) :
                        (<div>
                        </div>)
                    }
                </div>)

                : (<div>
                </div>)
        }
            <h1 className="d-flex text-dark justify-content-center my-3">Auctioneers from our site</h1>
            {Cards}
        </div >
    )
};