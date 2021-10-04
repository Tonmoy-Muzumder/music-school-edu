import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitterSquare, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {

    const img = "http://www.nicdarkthemes.com/themes/education/html/demo/music/img/logos/logo-soundlab-white.svg"

    const fb = <FontAwesomeIcon icon={faFacebook} />
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
    const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
    const git = <FontAwesomeIcon icon={faGithub} />

    return (
        <div className="footer-container">
            <img style={{marginTop: 50, marginBottom: 20, height: 60}} src={img} alt="" />
            <div>
           <div style={{fontSize: 40, color: 'white'}}>{fb} {twitter} {linkedIn} {git}</div>

           <hr />
           
            <p style={{fontSize: 20, color: 'white', margin: 10}}> © Copyright 2021 - Music School - Sound Laborator</p>
            
            </div>
        </div>
    );
};

export default Footer;