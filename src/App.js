import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
      <div className="App">
          <Navigation />
        <div className="text-center pt-3">
         <Home />
        </div>

      </div>
  );
}

export default App;





