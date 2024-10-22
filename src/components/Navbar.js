// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/owner-login">Owner Login</Link>
            <Link to="/owner-register">Owner Register</Link>
            <Link to="/salesperson-login">Salesperson Login</Link>
        </nav>
    );
};

export default Navbar;
