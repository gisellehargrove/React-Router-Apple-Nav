import React from 'react';
import Data from '../../data.js';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="Nav">
      { Data.map((navLink, index) =>
        <Link
          className="nav-link"
          to={`/${navLink.name}`}
          key={index}>
          {navLink.name}
        </Link>
      )}
    </div>
  );
};

export default Nav;
