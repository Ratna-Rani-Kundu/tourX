import React from 'react';
import { Card, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {img,name,description,_id}=service
    return (
        <>
            

    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <h2>{name}</h2>
             </Card.Title>
          <Card.Text>
           Details: {description} 
          
          </Card.Text>
         
        </Card.Body>
        <Card.Footer>
         
       <Link to={`/services/${_id}`}><Button variant="primary">Book Now</Button></Link>
    </Card.Footer>
      </Card>
    </Col>
        </>
    );
};

export default Service;