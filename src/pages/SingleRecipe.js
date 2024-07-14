import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RecipeList = () => {
    const { label } = useParams(); // Assuming recipeId is the recipe label
    const [recipe, setRecipe] = useState(null);
    console.log ()

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const apiKey = '4c99fbd8edcb0e2995b2bbde99e329c0'; // Replace with your Edamam API Key
                const appId = 'b1bea976';   // Replace with your Edamam App ID

                const response = await fetch(
                    `https://api.edamam.com/search?q=${encodeURIComponent(label)}&app_id=${appId}&app_key=${apiKey}&to=1`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                if (data.hits.length > 0) {
                    setRecipe(data.hits[0].recipe); // Using the first result from hits array
                } else {
                    console.error('Recipe not found');
                }
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
        };

        fetchRecipeDetails();
    }, [label]);

    if (!recipe) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-5">
                            <h2 className="title-italic text-center">loading recipe ...</h2>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-5">
                    <Link to="/recipes" className="btn mb-5">BACK TO SEARCH</Link>
                    <img src={recipe.image} className="d-block w-100" style={{ maxHeight: "30rem" }} alt="recipe"></img>
                </div>
                <div className="col-10 mx-auto col-md-6 my-5">
                    <h6 className="mx-2">{recipe.label}</h6>
                    <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="btn mx-2 mb-3">recipe url</a>
                    <ul className="list-group my-1">
                        <h6 className="mx-2">INGREDIENTS</h6>
                        {recipe.ingredients.map((ingredient, index) => {
                            return (<li key={index} className="list-group-item mx-2">{ingredient.text}</li>);
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RecipeList;

