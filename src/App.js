import React, { Component, Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Default from './pages/Default';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './images/homebg.jpg';
import RecipeList from './pages/SingleRecipe';
class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home />} />
                        <Route path='/recipes' element={<Recipes />} />
                        <Route path='/recipes/:label' element={<RecipeList />} />
                <Route path='/about' element={<About /> } />
                <Route path='/*' element={<Default />} />
            </Routes>
            </>
            </Router>
        );
    }
}

export default App;
