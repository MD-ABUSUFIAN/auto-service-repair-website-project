import React from 'react';
import { Link } from 'react-router-dom';
import errorimage from '../../images/error.jpg';

const Notfound = () => {
    return (
        <div>
            <img className="w-75 image-fluid" src={errorimage} alt=""/>
            <br/>
            <Link to="/home" className="btn btn-lg btn-primary py-2 px-3 fw-16 fs-2">
            Back Home Page
            </Link>
            
        </div>
    );
};

export default Notfound;