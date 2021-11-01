import React from 'react';
import { Card, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {img,name,price,description,_id}=service
    return (
        <>
            

    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           Details: {description} 
           <br />
           Price : {price}
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