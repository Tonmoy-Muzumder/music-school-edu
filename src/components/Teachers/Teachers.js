import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('./teachersData.JSON')
        .then(res => res.json())
        .then(data => setTeachers(data));
    },[]);
    return (
        <div>
            <Container>
            <h1 style={{fontSize: 50, color:"gray", padding: 5, margin: 0}}>Experienced Teachers</h1>

<h2 style={{fontSize: 20, color:"gray",  padding: 5 , margin: 0}}>The Best Teachers In Our School</h2>
            </Container>


            
            <div>
                <Container className="my-2">
                <Row xs={2} md={4} lg={4} className="g-5">
                    {
                        teachers.map(teacher => <Teacher key={teacher.id}teacher={teacher}></Teacher>)
                    }
                    
                </Row>
                </Container>
            </div>
        </div>
    );
};

export default Teachers;