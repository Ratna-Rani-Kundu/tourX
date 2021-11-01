import React from 'react';
import { Button,Container } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
    const {signInUsingGoogle,user}=useFirebase();
    return (
        <Container>
            <h1>Sign in With Google</h1>
            {!user?.displayName?  <Button onClick={signInUsingGoogle}>Sign In</Button> : <div>Signed in as: {user?.displayName} </div>         }
        </Container>
    );
};

export default LogIn;