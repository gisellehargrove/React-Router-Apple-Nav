import React from 'react';
import { Link } from 'react-router-dom';

const SubNav = (props) => {
  console.log(props, 'props');

  if(!props.subLinks) return <div>Loading...</div>

  return (
    <div className="sub-nav">
      {props.subLinks.map((subLink, index) =>
        <Link
          className="subnav-link"
          key={index}
          to=''>
          <img
            className={props.name}
            src={subLink.img}
            alt={subLink.name}>
          </img>
        </Link>
      )}
    </div>
  );
};

export default SubNav;
