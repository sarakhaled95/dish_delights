import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
class App extends Component {
    render() {
        return (
            <Router>
                <main>
                <Routes>
                        <Route path="/" exact component={Home} />
                        <Route path="/recipes" exact component={Recipes} />
                        <Route path="/recipes/:id" component={SingleRecipe} />
                        <Route component={Default} />
                </Routes>
            </main>
            </Router>
        );
    }
}

export default App;
