import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitterSquare, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {

    const fb = <FontAwesomeIcon icon={faFacebook} />
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
    const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
    const git = <FontAwesomeIcon icon={faGithub} />

    return (
        <div className="footer-container">
           <div style={{marginLeft: 80,marginRight:100, marginTop:10, height: 70, padding: 10, marginBottom: 30}}>
                   <h1 style={{fontSize: 40, margin: 0, color: 'white'}}>SOUND</h1>
                   <span style={{color: 'white', marginLeft: 50, fontSize: 10}}>L A B O R A T O R Y</span>
               </div>
            <div>
           <div style={{fontSize: 40, color: 'white'}}>{fb} {twitter} {linkedIn} {git}</div>

           <hr />

            <p style={{fontSize: 20, color: 'white', margin: 10}}> © Copyright 2021 - Music School - Sound Laborator</p>
            
            </div>
        </div>
    );
};

export default Footer;