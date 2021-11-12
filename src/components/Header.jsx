import React from 'react';
import { Nav, Logo } from '.';

export const Header = () => {
  return (
    <header className="navbar  shadow-lg bg-neutral text-neutral-content py-4">
      <div className="container  mx-auto">
        <Logo className="absolute" />
        <Nav />
      </div>
    </header>
  );
};
