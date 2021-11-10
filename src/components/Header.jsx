import React from 'react';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <header className="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
      <div className="px-2 mx-2 navbar-start">
        <span className="text-lg font-bold">daisyUI</span>
      </div>
      <Nav />
    </header>
  );
};
