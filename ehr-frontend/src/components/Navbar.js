// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you're importing your CSS

const Navbar = ({ isLoggedIn, onLogout }) => {
    return (
        <nav>
            <div className="nav-links">
                <Link to="/">Home</Link>
                {isLoggedIn ? (
                    <>
                        <Link to="/patient-data">Patient Data</Link>
                        <button onClick={onLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
