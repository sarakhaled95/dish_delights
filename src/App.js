import React, { Component, Fragment} from 'react';
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
            <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recipes'  element={<Recipes />} />
                <Route path='/recipes/:id' element={<SingleRecipe />} />
                <Route path='/*' element={<Default />} />
            </Routes>
            </>
            </Router>
        );
    }
}

export default App;
