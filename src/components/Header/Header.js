import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




const Header = () => {
    const img = "http://www.nicdarkthemes.com/themes/education/html/demo/music/img/logos/logo-soundlab-color.svg";
    return (
       <div className="header-container">

            <nav className="nav">
                <div>
                    <img style={{marginLeft: 100,marginRight:300, marginTop:10, height: 70, padding: 10}} src={img} alt="" />
                </div>
                <NavLink to="/home">HOME |</NavLink>
                <NavLink to="/about">ABOUT US |</NavLink>
                <NavLink to="/services">SERVICES |</NavLink>
                <NavLink to="/teachers">TEACHERS |</NavLink>
                
            </nav>
       </div>


    );
};

export default Header;