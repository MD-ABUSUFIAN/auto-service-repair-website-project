
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,name,img,Price,Description,time}=service;
    return (
        <div className="service">
           
               
               <img src={img} alt="" />
               <h1 > {name}</h1>
               <h2>Duration : {time}</h2>
               <h2 className="text-danger">Price: ${Price}</h2>
               <p className='p-2'>{Description}</p>
               <Link to={`/booking/${id}`}><button className="my-3 px-3 py-2 btn btn-warning fw-bold fs-4 booking-btn">Book {name.toLowerCase()}</button></Link>
             
           
        </div>
    );
};

export default Service;