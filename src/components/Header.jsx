import React from 'react';
import { Nav, Logo } from './';

export const Header = () => {
  return (
    <header className="navbar mb-2 shadow-lg bg-neutral text-neutral-content py-3">
      <div className="container  mx-auto">
        <Logo />
        <Nav />
      </div>
    </header>
  );
};
