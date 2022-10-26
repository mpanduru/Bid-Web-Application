import React from 'react'
import { ChangeRole } from '../cards/ChangeRole'
import { DeleteItems } from '../cards/DeleteItems'
import { DeleteUsers } from '../cards/DeleteUsers'
import { GiveAdmin } from '../cards/GiveAdmin'

export const AdminPannel = () => {
    return (
        <div>
            <GiveAdmin />
            <ChangeRole />
            <DeleteUsers />
            <DeleteItems />
        </div>
    )
}
