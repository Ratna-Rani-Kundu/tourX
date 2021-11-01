import React from 'react';
import { Card, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TourDetails = ({details}) => {
    const {name,duration,price,img,_id}=details
    return (
        <>
            

    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
              <h2>Place: {name}</h2>
          </Card.Title>
           <h3>Price: ${price}</h3>
           <h4>Duration: {duration}</h4>
        </Card.Body>
        <Card.Footer  className="text-center">
         
       <Link to={`/services/${_id}`}><Button  variant="primary">Place Booking</Button></Link> 
       <hr />
       <Link to={`/services/${_id}`}><Button variant="primary">Delete Booking</Button></Link>
    </Card.Footer>
      </Card>
    </Col>
        </>
    );
};

export default TourDetails;