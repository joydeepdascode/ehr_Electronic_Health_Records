// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PatientData from './pages/PatientData';
import Navbar from './components/Navbar';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState(''); // Store user type (admin/client)

    const handleLogin = (userType) => {
        setIsLoggedIn(true);
        setUserType(userType);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserType('');
    };

    return (
        <Router>
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                    path="/patient-data"
                    element={
                        isLoggedIn ? <PatientData userType={userType} /> : <Login onLogin={handleLogin} />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
