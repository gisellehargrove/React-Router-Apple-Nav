import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Data from './data.js';
import { Route } from 'react-router-dom';
import SubNav from './components/SubNav/SubNav.js';

function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <Nav />
      </div>
      <Route
        exact
        path="/"
        render={() =>
          <SubNav />
        } />

      {Data.map((routeLink, index) =>
        <Route
          key={index}
          path={`/${routeLink.name}`}
          render={() =>
            <SubNav />
          } />
      )}
    </div>
  );
}

export default App;
