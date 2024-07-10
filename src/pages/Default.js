import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Default extends Component {
    render() {
        return (
            <div className="bgdefault">
                <div className="default">404</div>
                <div className="default">YOU ARE IN THE WRONG PLACE</div>
                <Link to="/" className="secondary-title btn btn-light btn-lg mt-5">RETURN TO HOME</Link>
            </div>
        );
    }
}