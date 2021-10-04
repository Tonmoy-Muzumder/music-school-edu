import React from 'react';

const NotFound = () => {
    const SadEmoji = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGaZnAyJh-pFzMYYbFUDuSdzk_KtbpTlTbsw&usqp=CAU"
    return (
        
        <div style={{textAlign: 'center', color: 'gray'}}>
            <img src={SadEmoji} alt="" />
            <h1 style={{fontSize: 100, }}>404</h1>
            <h3 style={{marginBottom: 250}}>Oops! Page Not Found</h3>
        </div>
    );
};

export default NotFound;