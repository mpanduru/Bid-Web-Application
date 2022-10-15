import { React, useContext } from 'react';
import logoImg from '../../Asset-2.png';
import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { AuthContext } from '../../context/AuthContext';

export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext)
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logoImg} alt="logo" height="100" className='shadow-none'/>
        </a>
        <div className="d-flex">
          <div className="col">
            {currentUser ? (
              <>
                <div className='btn btn-outline-secondary mx2 disabled me-2'>{currentUser.email}</div>
                <div className="btn secondarybutton btn-rounded scale-on-hover me-2" onClick={() => logout()}>Logout</div>
              </>
            ) : (
              <>
                <LoginComp />
                <RegisterComp />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
