import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Data from './data.js';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <Nav />
      </div>
      <Route exact path="/" />

      {Data.map((routeLink, index) =>
        <Route key={index} path={`/${routeLink}`}/>
      )}
    </div>
  );
}

export default App;
