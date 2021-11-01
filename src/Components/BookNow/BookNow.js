import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BookNow = () => {
    const {id}=useParams();
    const [service,setService]=useState({})
    useEffect(()=>{
        const url=`http://localhost:5000/services/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    
    },[])
    
    return (
        <div>
           <h2>Wecome to Book Now service</h2>
           <p>Booking Id : {id}</p> 
        </div>
    );
};

export default BookNow;