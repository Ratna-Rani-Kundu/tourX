import React from 'react';
import "./Home.css"
import{ Button, Row} from 'react-bootstrap'
import{  Link} from 'react-router-dom'
import useService from '../../context/useService';
import Service from '../Service/Service';

// import useService from '../../hooks/useService';
// import Service from '../Service/Service';

const Home = () => {
  const [services]=useService()
   
    return (
        <div>
          <div className='banner p-5 mb-3'>
          <h1 className='text-right pt-5 text-success mt-3'>Wonderful Tour Around The World </h1><br/>
          <h3 className='text-danger'>3 Days , 4 Night Tour</h3>
         <Link to='/services'> <Button  className="btn-danger  mt-3">Book Now</Button></Link>
          <div className=' p-5 m-5 container text-center w-50 d-flex '>
         
            
          </div>
          
        </div>
        
          <h1  className='text-primary text-center mb-3'>Our Services</h1>
          
                
                <Row xs={1} sm={2} md={3} lg={4}className="g-4">
            {
                services.map(service=><Service

                key={service._id}
                service={service}></Service>)
            }
            </Row>
        </div>
    );
};

export default Home;