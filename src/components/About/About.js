import React from 'react';

const About = () => {
        const LoGo = "https://yt3.ggpht.com/ytc/AKedOLR39oeRIExPilreBmZwdTI-6MLeeC6tVO3O0p1b=s900-c-k-c0x00ffffff-no-rj"

    return (
        <div className="d-flex">
            <div style={{margin: 150, color: 'gray'}}>
            <h1 style={{marginBottom: 20, fontSize: 40}}>Sound Laboratory Music School</h1>
            <p style={{fontSize: 15}}>This is Our music Learning Website. You can learn sing with instrument.Here have many Experienced Teachers. They are teach you full Course. so, you can Enroll in  our course. See our services menu and choose your course. GOOD LUCK!</p>

            <button style={{backgroundColor: 'gray', color: 'white', borderRadius:5}}>CONTACT US</button>
            </div>

            <img style={{height: 600, margin: 50}} src={LoGo} alt="" />
        </div>
    );
};

export default About;