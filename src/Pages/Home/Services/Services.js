import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('https://peaceful-sierra-14791.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="container" id="services" >
            <h1 className="mt-5 fs-1 fw-2 text-white bg-primary p-2 mb-3 rounded-pill">Our Service</h1>
          
          <div className="services-container">
          {
               services.map(service=><Service key={service._id}
                   service={service}>

                   </Service>
              )
           }
          </div>
         
            
        </div>
    );
};

export default Services;






