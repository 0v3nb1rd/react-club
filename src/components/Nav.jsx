import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
      <div className="hidden px-2 mx-auto navbar-center lg:flex">
        <ul className="flex items-stretch">
          <li className="mx-2">
            <NavLink to="/" className="btn btn-accent btn-md px-11">
              Home
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/catalog" className="btn btn-accent btn-md px-11">
              Catalog
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink to="/cart" className="btn btn-accent btn-md px-11">
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
