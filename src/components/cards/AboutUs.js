import React from 'react'
import '../../App.css';

export const AboutUs = () => {
    return (
        <div className="mb-3 mt-9 mw-100">
            <hr />
            <div className="null-fill"></div>
            <h1 className='text-center family-TNR mw-100'><strong>About Us</strong></h1>

            <div id='Primary' className='row mw-100 ms-3 h4'>Why is it safe to buy from BestAuctions ?</div>
            <div id='Secondary' className='row mw-100 ms-3'>
                <ul className='list-unstyled family-TNR'><ul>
                    <li>The mission of BestAuctions is to ensure a safe and legal business route for many people</li>
                    <li>A proud member of the Better Business Bureau</li>
                    <li>Licensed by MARIUS PANDURU since 2022</li>
                    <li>Secure your money transfers through our trustworthy financial institutions</li>
                </ul>
                </ul>
            </div>
            <div className="null-fill-small"></div>
        </div >
    )
}