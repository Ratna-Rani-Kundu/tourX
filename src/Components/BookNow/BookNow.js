// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
import React from 'react';
import { Row } from 'react-bootstrap';
import useService from '../../context/useService';

import TourDetails from '../TourDetails/TourDetails';
const BookNow = () => {
    // const {id}=useParams();
    // const [service,setService]=useState({})
    // useEffect(()=>{
    //     const url=`https://chilling-zombie-19937.herokuapp.com/services/${id}`
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    
    // },[])
    const [services]=useService([])
    return (
        <div className="mt-4">
             <Row xs={1} sm={2} md={3} lg={3}className="g-4">
             {
                services.map(details=><TourDetails 
                    key={details._id}
                    details ={details}
                ></TourDetails>)
            }
             </Row>
        </div>
    );
};

export default BookNow;