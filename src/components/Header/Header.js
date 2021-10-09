import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user } = useFirebase()
    console.log(user)
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/register">register</Link>
            <Link to="/login">Login</Link>
            {user.email && <button>Log out</button>}
        </div>
    );
};

export default Header;