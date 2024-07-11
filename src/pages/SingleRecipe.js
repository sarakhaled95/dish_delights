import React, { Component } from 'react';
import { recipeData } from '../data/tempDetails';
import { Link } from 'react-router-dom';
export default class SingleRecipe extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        const id = this.props.label;
        this.state = {
            recipe: recipeData,
            id,
            loading: false
        }
    }
    render() {
        const { url, label, image, ingredientLines } = this.state.recipe;
        if (this.state.loading) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-5">
                            <h2 className="title-italic text-center">loading recipe ...</h2>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-5">
                        <Link to="/recipes" className="btn mb-5">BACK TO SEARCH</Link>
                        <img src={image} className="d-block w-100" style={{ maxHeight: "30rem" }} alt="recipe"></img>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-5">
                        <h6 className="mx-2">{label}</h6>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="btn mx-2 mb-3">recipe url</a>
                        <ul className="list-group my-1">
                            <h6 className="mx-2">INGREDIENTS</h6>
                            {ingredientLines.map((item, index)=>{
                                return (<li key={index} className="mx-2">{item }</li>);
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}