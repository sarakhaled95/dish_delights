import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <>
            
                <div className="container">
                    <div className="mainlogo"></div>
                    <div className="background">
                        <Link to="recipes" className="secondary-title btn btn-light btn-lg mt-5">SEARCH RECIPES</Link>
                    </div> 
                    <div className="footerimg"></div>
                </div>
                
            </>
        );
    }
}