import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
// const services=[
//     {name:'Replace Tire',Price:2000,time:2,img:'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwbWVjaGFuaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'},
//     {name:'Replace Tire',Price:2000,time:2,img:'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwbWVjaGFuaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'},
//     {name:'Replace Tire',Price:2000,time:2,img:'https://images.unsplash.com/photo-1543747255-94b72995ac74?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMG1lY2hhbmljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'},
//     {name:'Replace Tire',Price:2000,time:2,img:'https://images.unsplash.com/photo-1599256630445-67b5772b1204?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMG1lY2hhbmljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'},
//     {name:'Replace Tire',Price:2000,time:2,img:'https://images.unsplash.com/photo-1596986952526-3be237187071?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNhciUyMG1lY2hhbmljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'},
//     {name:'Replace Tire',Price:2000,time:2,img:'https://images.unsplash.com/photo-1504222490345-c075b6008014?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwbWVjaGFuaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'}
// ]

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="container">
            <h1 className="mt-5 fs-1 fw-2 text-white bg-primary p-2 mb-3 rounded-pill">Our Service</h1>
          
          <div className="services-container">
          {
               services.map(service=><Service key={service.id}
                   service={service}>

                   </Service>
              )
           }
          </div>
         
            
        </div>
    );
};

export default Services;






