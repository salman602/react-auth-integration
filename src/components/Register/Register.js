import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>
            <input type="email" name="" id="" /><br />
            <input type="password" name="" id="" /><br />
            <input type="submit" value="Submit" /><br />
            <Link to="/login">Already Registerd?</Link>
        </div>
    );
};

export default Register;