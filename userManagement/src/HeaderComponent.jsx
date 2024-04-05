import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import { isLoggedInUser, logout } from './AuthService';

const HeaderComponent = () => {
  
  const URL="http://localhost:3000";
  //Return boolean "true" if user is logged in and "false" if user is logged out
  const isAuth=isLoggedInUser();
  //React Hook 
  const navigate=useNavigate();
  //When "logout" button is clicked it navigate to home page
    const handleLogOut=()=>{
      logout();
      navigate("/");
      

      }
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div className='ps-3'> 
            <a href={URL} className='navbar-brand  '>Employee Management Application</a>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
              {!isAuth && (<li className='nav-item'>
                <Link to="/login" className='nav-link'>Login</Link>
              </li>)}
              {!isAuth && ( <li className='nav-item'>
                <Link to="/register" className='nav-link'>Register</Link>
              </li>)}
              {isAuth && (<li className='nav-item'>
                <Link to="/" className='nav-link' onClick={handleLogOut}>Logout</Link>
              </li>)} 
              {isAuth && (<li className='nav-item'>
                <Link to="/user" className='nav-link' >Back</Link>
              </li>)} 
              
            </ul>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent