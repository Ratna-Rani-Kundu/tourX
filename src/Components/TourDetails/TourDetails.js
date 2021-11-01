import React from 'react';
import { Card, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TourDetails = ({details}) => {
    const {name,duration,price,img}=details

    // //delete user
    // const handleDeleteUser=id=>{
    //     const url=`https://chilling-zombie-19937.herokuapp.com/services/${id}`
    //         fetch(url,{
    //             method: "DELETE"
    //         })
    //         .then(res=>res.json())
    //         .then(data=>{
    //             if(data.deletedCount>0){
    //                 alert('deleted successfully')
    //                 const remainningServices=services.filter()
    //             }
    //         })
    // }
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
         
       <Link to="/orderplaced"><Button  variant="primary">Place Booking</Button></Link> 
       <hr />
       {/* <Button onClick={()=>handleDeleteUser(_id)} variant="primary">Delete Booking</Button>
       <Link to={`/services/${_id}`}><Button onClick={()=>handleDeleteUser(_id)} variant="primary">Delete Booking</Button></Link> */}
    </Card.Footer>
      </Card>
    </Col>
        </>
    );
};

export default TourDetails;