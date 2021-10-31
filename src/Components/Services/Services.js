import React from 'react';
import Service from "../Service/Service";
import{Row} from 'react-bootstrap';

import useService from '../../context/useService';

const Services = () => {
    const [services]=useService([])
    
    return (
        <div className="mt-4">
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

export default Services;