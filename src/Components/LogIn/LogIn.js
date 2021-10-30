import React from 'react';
import {Button} from 'react-bootstrap'
import useFirebase from '../../context/useFirebase';

const LogIn = () => {
    const{signInUsingGoogle}=useFirebase()
    return (
        <div>
            <Button onClick={signInUsingGoogle} className='bg-primary'>  Google Sign In</Button>
        </div>
    );
};

export default LogIn;