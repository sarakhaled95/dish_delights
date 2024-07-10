import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-2">
            <Link to="/" className="navbar-brand">
                PINCH OF SALT
            </Link>
            <div className="collapse navbar-collapse show ml-sm-5" >
                <ul className="navbar-nav ml-auto">
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
            </div>
        </nav>
    );
}