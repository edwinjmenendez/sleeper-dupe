import React, { useState, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import { Login } from '../../pages/login/Login';
import { Signup } from '../../pages/signup/Signup';

export const Routess = () => {

    const [showSignupForm, setShowSignupForm] = useState(false);

    const handleSignupClick = () => {
        setShowSignupForm(true);
    }

    const handleSignupClose = () => {
        setShowSignupForm(false);
    }


    return (
        <div>
            <Router>
                <nav className="navbar-header-container" >
                </nav>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </Router>

        </div>
    )
}

