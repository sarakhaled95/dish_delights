import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Recipe extends Component {
    render() {
        const {url, label, image } = this.props.recipe
        return (
            <div className="col-10 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card" style={{ height: '100%' }}>
                    <img src={image} style={{ height: "14rem" }} className="img-card-top" alt="recipe"></img>
                    <div className="card-body secondary-title"><h6>{label}</h6></div>
                    <div className="container3">
                        <Link to={`/recipes/${label}`} className="btn mx-2 mb-3">Details</Link>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="btn mx-2 mb-3">recipe url</a>
                    </div>
                </div>
            </div>
        );
    }
}