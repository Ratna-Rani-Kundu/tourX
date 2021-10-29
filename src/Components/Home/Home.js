import React from 'react';
import {Link} from 'react-router-dom'
import { Navbar,Container } from 'react-bootstrap';

const Home = () => {
    return (
        <>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
   
      <img
        src="https://image.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
  <Navbar.Brand >World-tour</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
    
         <Link className="light"   to='/home'>Home</Link>
      <Link className="p-5 light" to='/service'>Services</Link>
      
    
  </Navbar.Collapse>
  </Container>
</Navbar> 
        </>
    );
};

export default Home;