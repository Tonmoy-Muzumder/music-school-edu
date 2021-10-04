import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./servicesData.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    return (
        <div>
            <h1 style={{fontSize: 50, color:"gray", padding: 5, margin: 0}}>Our More Courses</h1>

            <h2 style={{fontSize: 20, color:"gray",  padding: 5 , margin: 0}}>The Best In Our School</h2>


            
            <div>
                <Container className="my-2">
                <Row xs={2} md={4} lg={4} className="g-5">
                    {
                        services.map(service => <Service key={service.id}service={service}></Service>)
                    }
                    
                </Row>
                </Container>
            </div>
        </div>
    );
};

export default Services;