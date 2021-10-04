import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSqure, faFaucet,  } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const img = "http://www.nicdarkthemes.com/themes/education/html/demo/music/img/logos/logo-soundlab-white.svg"
    return (
        <div className="footer-container">
            <img style={{margin: 50}} src={img} alt="" />
            <div>
            {/* <FontAwesomeIcon icon={} />  */}
            
            </div>
        </div>
    );
};

export default Footer;