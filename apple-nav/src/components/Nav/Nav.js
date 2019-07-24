import React from 'react';
import Data from '../../data.js';
import { Link } from 'react-router-dom';

const Nav = () => {
  console.log(Data)
  return (
    <div className="Nav">
      { Data.map((navLink, index) =>
        <Link to="/" key={index}>{navLink.name}</Link>
      )}
    </div>
  );
};

export default Nav;
