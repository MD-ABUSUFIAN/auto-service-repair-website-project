
import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name,img,Price,Description,time}=service;
    return (
        <div className="service">
           
               
               <img src={img} alt="" />
               <h1 > {name}</h1>
               <h2>Duration : {time}</h2>
               <h2 className="text-danger">Price: ${Price}</h2>
               <p className='p-2'>{Description}</p>
             
           
        </div>
    );
};

export default Service;