import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle, signInUsingFacebook } = useAuth()
    return (
        <div>
            <button onClick={signInUsingGoogle}>Login with google</button><br />
            <button onClick={signInUsingFacebook}>Login with Facebook</button><br />
            <Link to="/register">Don't have an account? Create here.</Link>
        </div>
    );
};

export default Login;