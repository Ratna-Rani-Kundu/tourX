import React from 'react';

import {Button, Container} from 'react-bootstrap'
import useFirebase from '../../context/useFirebase';

const LogIn = () => {
    const{signInUsingGoogle}=useFirebase()
    return (
        <div  className="log-bg">
            <Container>
               
                   <h2 className="mb-3">Log in to your account</h2>
                    <Button  onClick={signInUsingGoogle} className='bg-primary'>  Sign In with Google </Button>
                    <div>-------------------</div>
            </Container>
        </div>
    );
};

export default LogIn;