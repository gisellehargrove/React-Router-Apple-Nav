import React from 'react';
import { Link } from 'react-router-dom';

const SubNav = (props) => {
  console.log(props);

  if(!props.subLinks) return <div>Loading...</div>
  return (
    <div className="sub-nav">
      {props.subLinks.map((subLink, index) =>
        <Link
          className="subnav-link"
          key={index}
          to=''>
            {subLink.name}
        </Link>
      )}
    </div>
  );
};

export default SubNav;
