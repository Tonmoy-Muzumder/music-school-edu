import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col,} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {img, title, description, date, time} = props.course;
    return (
       
            <Col>
        <Card style={{ width: '25rem', height: "40rem"}}>
        <Card.Img variant="top" src={img}/>
        <Card.Body>
        <Card.Title style={{color: "gray", fontSize: 20}}>{title}</Card.Title>
        <Card.Text style={{color: "gray"}}>{description}
        <p style={{color: "gray", marginTop: 15}}><FontAwesomeIcon icon={faCalendarAlt} /> {date}</p>
        <p style={{color: "gray"}}><FontAwesomeIcon icon={faClock} /> {time}</p>

        <button style={{backgroundColor: "gray",borderRadius: 10, color: "white",width: 150, marginLeft: 80, marginTop: 20}}>Enroll with $ 100</button>
        </Card.Text>
        </Card.Body>
         </Card>
        </Col>
       
        
    );
};

export default Course;

