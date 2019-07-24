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
          <SubNav name={Data[0].name} subLinks={Data[0].subLinks} />
        } />

      {Data.map((routeLink, index) =>
        <Route
          key={index}
          name={routeLink.name}
          path={`/${routeLink.name}`}
          render={() =>
            <SubNav name={routeLink.name} subLinks={routeLink.subLinks} />
          } />
      )}
    </div>
  );
}

export default App;
