import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {signinGoogleUsing}=useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signinGoogleUsing} className=" btn btn-danger">Google Signin</button>
        </div>
    );
};

export default Login;