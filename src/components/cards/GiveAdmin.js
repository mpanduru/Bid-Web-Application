import React from 'react'
import { FirestoreContextGetCollection, FirestoreContextGetID } from '../../context/FirestoreContext';

export const GiveAdmin = () => {

    const AllUserEmails = [];
    FirestoreContextGetCollection('users', AllUserEmails, 'email')
    const AllUserRoles = [];
    FirestoreContextGetCollection('users', AllUserRoles, 'role')
    const AllUserIDS = [];
    FirestoreContextGetID('users', AllUserIDS)

    const Users = [];

    for (let i = 0; i < AllUserEmails.length; i++) {
        Users.push(<tr>
            <th scope='row'>{i + 1}</th>
            <td>{AllUserEmails[i]}</td>
            <td>{AllUserRoles[i]}</td>
            <td>{AllUserIDS[i]}</td>
        </tr>)
    }

    const AllItemTitles = [];
    FirestoreContextGetCollection('auctions', AllItemTitles, 'title')
    const AllItemIDS = [];
    FirestoreContextGetID('auctions', AllItemIDS)
    const AllItemOwner = [];
    FirestoreContextGetCollection('auctions', AllItemOwner, 'owner')

    const Auctions = [];

    for (let j = 0; j < AllItemTitles.length; j++) {
        Auctions.push(<tr>
            <th scope='row'>{j + 1}</th>
            <td>{AllItemTitles[j]}</td>
            <td>{AllItemOwner[j]}</td>
            <td>{AllItemIDS[j]}</td>
        </tr>)
    }

    return (
        <div>
            <div className='null-fill'></div>
            <h1 className='text-center title'>Give Admin Privileges to Another User</h1>
            <div className='row mt-5'>
                <div className='col text-center fs-4'><strong>USERS</strong></div>
                <div className='col text-center fs-4'><strong>AUCTIONS</strong></div>
            </div>
            <div className='row'>
                <table className='table m-5 table-dark col'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">ChangeID</th>
                        </tr>
                    </thead>
                    <tbody>{Users}</tbody>
                </table>
                <table className='table m-5 table-light col'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Auction Title</th>
                            <th scope="col">Owner</th>
                            <th scope="col">ChangeID</th>
                        </tr>
                    </thead>
                    <tbody>{Auctions}</tbody>
                </table>
            </div>
            <div className='row'>
                <div className='col'></div>
            </div>
        </div>
    )
}
