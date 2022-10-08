import React from 'react';
import logoImg from '../../Asset-2.png';
import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';

export const NavComp = () => {
  return (
    <nav className="container navbar sticky-top navbar-light bg-light">
        <div className="container-fluid">
            <div className="navbar-brand">
                <img src={logoImg} alt="logo" height="100" />
            </div>
            <div className="d-flex">
                <div className="col">
                  <LoginComp />
                  <RegisterComp />
                </div>
            </div>
        </div>
    </nav>
  )
}
