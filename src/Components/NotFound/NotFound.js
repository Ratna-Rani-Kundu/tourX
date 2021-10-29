import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='contaiuner'>
            <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" />
       <Link to='/home' > <Button >Go to Home</Button></Link>
        </div>
    );
};

export default NotFound;