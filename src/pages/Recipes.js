import React, { Component, useState, useEffect } from 'react';
import Search from '../components/Search';
import { Link } from 'react-router-dom';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('salads');

    useEffect(() => {
        const fetchRecipes = async () => {
            const apiKey = '4c99fbd8edcb0e2995b2bbde99e329c0'; 
            const appId = 'b1bea976';
            
            try {
                const response = await fetch(
                    `https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${apiKey}`
                );

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setRecipes(data.hits);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        if (searchQuery.trim() !== '') {
            fetchRecipes();
        } else {
            setRecipes([]); // Reset recipes if query is empty
        }
    }, [searchQuery]); // Depend on query state


    const handleSearch = (searchQuery) => {
        setSearchQuery(searchQuery); 
    };

    if (loading) return <div className="container">
        <div className="row">
            <div className="col-10 mx-auto col-md-6 my-5">
                <h2 className="title-italic text-center">loading recipe ...</h2>
            </div>
        </div>
    </div>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <Search onSearch={handleSearch}></Search>
            <div className="container py-5">
                <div className="row">{recipes.map((recipe, index) => (
                    <div className="col-10 mx-auto col-md-6 col-lg-3 my-3">
                        <div className="card" style={{ height: '100%' }} key={index}>
                            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                            <div className="card-body secondary-title"><h6>{recipe.recipe.label}</h6></div>
                            <div className="container3">
                                <Link to={`/pinch-of-salt-app/recipes/${encodeURIComponent(recipe.recipe.label)}`} className="btn mx-2 mb-3">Details</Link>
                                <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer" className="btn mx-2 mb-3">Recipe url</a>
                            </div>
                        </div>
                    </div>
                ))}</div>
                </div>
        </div>
    );
};

export default Recipes;