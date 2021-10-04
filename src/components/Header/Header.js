import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';





const Header = () => {
    
    const login = <FontAwesomeIcon icon={faUser} />
    const lock = <FontAwesomeIcon icon={faLock} />
    return (
        <div className="header-container">

        <nav className="nav">
        <div>
               <div style={{marginLeft: 80,marginRight:200, marginTop:10, height: 70, padding: 10}}>
                   <h1 style={{fontSize: 40, margin: 0, color: 'white'}}>SOUND</h1>
                   <span style={{color: 'white', marginLeft: 50, fontSize: 10}}>L A B O R A T O R Y</span>
               </div>
            </div>
            <NavLink to="/home">HOME |</NavLink>
            <NavLink to="/services">SERVICES |</NavLink>
            <NavLink to="/teachers">TEACHERS |</NavLink>
            <NavLink to="/about">ABOUT US |</NavLink>

            <div style={{fontSize: 15, color: 'white', marginTop: 40}}>
                {login} LOGIN | |  {lock} REGISTER
            </div>
            
        </nav>
   </div>


    );
};

export default Header;