import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
      <div className="hidden px-2 mx-auto navbar-center lg:flex">
        <ul className="flex items-stretch">
          <li className="mx-2">
            <Link to='/' className="btn btn-accent btn-md px-11">
              Home
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/catalog" className="btn btn-accent btn-md px-11">
              Catalog
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/cart" className="btn btn-accent btn-md px-11">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
