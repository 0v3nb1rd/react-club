import React from 'react';

export const Nav = () => {
  return (
    <>
      <div className="hidden px-2 mx-auto navbar-center lg:flex">
        <ul className="flex items-stretch">
          <li className="mx-2">
            <a href="#" className="btn btn-accent  btn-md px-11">
              Home
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="btn btn-accent btn-md px-11">
              Catalog
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="btn btn-accent btn-md px-11">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
