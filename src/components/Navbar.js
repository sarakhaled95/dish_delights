import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-1">
            <Link to="/" className="navbar-brand">
                PINCH OF SALT
            </Link>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#x"><span className="navbar-toggler-icon"></span></button>
            
                <ul id="x" className="navbar-nav collapse navbar-collapse ml-auto">
                    <li className="navbar-item">
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    </li>
                    <li className="navbar-item">
                    <Link className="nav-link" to="/recipes">
                        Recipes
                    </Link>
                    </li>
                    <li className="navbar-item">
                    <Link className="nav-link" to="/about">
                        About Us
                    </Link>
                    </li>
                </ul>
        </nav>
    );
}