import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';


const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./homeData.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[]);

    return (
        <div>
            <h1 style={{fontSize: 50, color:"gray", padding: 5, margin: 0}}>Our Courses</h1>

            <h2 style={{fontSize: 20, color:"gray",  padding: 5 , margin: 0}}>The Best In Our School</h2>


            
            <div>
                <Container  className="my-4">
                <Row xs={2} md={4} lg={4} className="g-5">
                    {
                        courses.map(course => <Course key={course.id}course={course}></Course>)
                    }
                    
                </Row>
                </Container>
            </div>
        </div>

        

    );
};

export default Home;