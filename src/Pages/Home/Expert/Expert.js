import React from 'react';
import './Expert.css'

const Expert = ({expert}) => {
    const {name,img,expertize}=expert;
    return (
        <div className="expert col-lg-4 col-md-6 col-sm-6 col-12 container mb-5 ">
           <div className="expert-card">
            <img src={img}alt=""/>
            <h2 className="mt-2">Name: {name}</h2>
            <h4 >Expertize: <small className="text-danger"> {expertize}</small></h4>
            </div>
            </div>
    
    );
};

export default Expert;