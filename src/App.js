import React, { Component, Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './images/homebg.jpg';
class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recipes'  element={<Recipes />} />
                <Route path='/recipes/:id' element={<SingleRecipe />} />
                <Route path='/about' element={<About /> } />
                <Route path='/*' element={<Default />} />
            </Routes>
            </>
            </Router>
        );
    }
}

export default App;
