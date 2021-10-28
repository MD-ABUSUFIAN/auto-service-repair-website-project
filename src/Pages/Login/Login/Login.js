import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {signinGoogleUsing}=useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            
            
            <p>You have not registered ? <Link to="/register">Register</Link> </p>
        <button onClick={signinGoogleUsing} className=" btn btn-danger">Google Signin</button>


        </div>
    );
};

export default Login;