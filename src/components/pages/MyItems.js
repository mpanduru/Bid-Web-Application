import React from 'react'
import { useNavigate } from 'react-router-dom'

export const MyItems = () => {
    const navigate = useNavigate();

    const move = () => {
        navigate('/my-items');
    }

    return (
        <div onClick={move} className="btn btn-outline-info btn-rounded scale-on-hover me-2">
            My Items
        </div>
    )
}
