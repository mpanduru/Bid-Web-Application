import React, { useContext, useRef } from 'react';
import '../../App.css';

export const BoughtItem = (imageName, title, description) => {

    return (
        <div className='d-flex justify-content-center'>
            <div className="card scale-on-hover col-10 m-5 w-50">
                <img className="card-img-top img-sizer" src={imageName} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

