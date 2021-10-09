import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle } = useFirebase()
    return (
        <div>
            <button onClick={signInUsingGoogle}>Login with google</button><br />
            <Link to="/register">Don't have an account? Create here.</Link>
        </div>
    );
};

export default Login;