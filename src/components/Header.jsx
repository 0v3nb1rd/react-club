import React from 'react';
import { Nav } from './Nav';
import logo from '../assets/img/logo.svg';

export const Header = () => {
  return (
    <header className="navbar mb-2 shadow-lg bg-neutral text-neutral-content py-3">
      <div className="container mx-auto">
        <a href="./" className="logo px-2 flex items-center absolute">
          <img className="mr-2" src={logo} alt="" />
          <span className="text-lg font-bold uppercase font-mono tracking-widest leading-4">
            React <br /> Club
          </span>
        </a>
        <Nav />
      </div>
    </header>
  );
};
