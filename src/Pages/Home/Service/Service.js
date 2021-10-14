
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,name,img,Price,Description,time}=service;
    return (
        <div className="service">
           
               
               <img src={img} alt="" />
               <h2 > {name}</h2>
               <h3>Duration : {time}</h3>
               <h3 className="text-danger">Price: ${Price}</h3>
               <p className='p-2'>{Description.slice(10,150)}</p>
               <Link to={`/booking/${id}`}><button className="my-3 px-3 py-2 btn btn-warning fw-bold booking-btn">Book {name.toLowerCase()}</button></Link>
             
           
        </div>
    );
};

export default Service;