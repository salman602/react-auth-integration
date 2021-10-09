import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, logOut } = useFirebase()
    console.log(user)
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/register">register</Link>
            <Link to="/login">Login</Link>
            {user.displayName && <button onClick={logOut}>Log out</button>}
            <span> {user.displayName}</span>
        </div>
    );
};

export default Header;