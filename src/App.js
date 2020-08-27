import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Authors from './components/Authors';
import Admin from './components/Admin';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {


    return (
        <div className="App">
            <Router>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/authors" component={Authors}/>
                    <Route exact path="/admin" component={Admin}/>
                    <Route
                        path="/"
                        component={() =>
                            <p>Oups cette page n'existe pas</p>}
                    />

                </Switch>
            </Router>
        </div>
    );
}

export default App;









