import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Card, Row} from 'react-bootstrap';

const Teacher = (props) => {
    const {img, name, teacher_of, description} = props.teacher;
    return (
        <>
        <Col>
        <Card style={{ width: '25rem', height: 500}}>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
        <Card.Title style={{color: "gray", fontSize: 30}}>{name}</Card.Title>
        <h5 style={{color: "gray"}}>{teacher_of}</h5>
        <Card.Text style={{color: "gray"}}>{description}
        

        <button style={{backgroundColor: "goldenrod", marginTop: 20}}>View Profile</button>
        </Card.Text>
        </Card.Body>
         </Card>
        </Col>
        
        </>
    );
};

export default Teacher;