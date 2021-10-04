import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';





const Header = () => {
    const img = "http://www.nicdarkthemes.com/themes/education/html/demo/music/img/logos/logo-soundlab-color.svg";

    
    const login = <FontAwesomeIcon icon={faUser} />
    const lock = <FontAwesomeIcon icon={faLock} />
    return (
        <div className="header-container">

        <nav className="nav">
        <div>
                <img style={{marginLeft: 80,marginRight:200, marginTop:10, height: 70, padding: 10}} src={img} alt="" />
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