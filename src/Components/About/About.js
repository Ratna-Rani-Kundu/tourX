import React from 'react';
import {Container,Row,Col} from "react-bootstrap"
const About = () => {
    return (
        <div  className='container m-5'>
        <Container>
            <Row>
              <Col>
              <img class="rounded" src="https://images.unsplash.com/photo-1553697388-94e804e2f0f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80" alt="" />
              
              </Col>
              <Col >
              <h5 className="text-danger">About TourX</h5>
              <h1>The Best Travel Agency Company.</h1>
              <p className='mt-5'>With a pro-active, hands-on approach to travel management and an absolute focus on cost control, Stewart Travel Management will put you back in control of your company's travel spend. Our commitment to providing you with the most effective travel management solution is clear - in our investment in our partnerships, our technology and our team.Working with all the world's major airlines, hotel groups and car rental companies, we are constantly developing and expanding our already formidable buying power, allowing us to compete with the largest of TMC's in the UK - even the top four.</p>
             <h1 className='mt-5'>SUPPORT SERVICES</h1>
             <p>As a Stewart Corporate Travel client we'll keep in touch with you. Our Business Development Manager, will arrange regular reviews and updates to ensure an ongoing productive relationship.</p>
              </Col>
            </Row>
        </Container>
            </div>
    );
};

export default About;