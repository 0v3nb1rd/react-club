import React from 'react';
import logoImg from '../assets/img/logo.svg';

export const Logo = () => {
  return (
    <a href="./" className="logo px-2 flex items-center absolute">
      <img className="mr-2" src={logoImg} alt="image logo" />
      <span className="text-lg font-bold uppercase font-mono tracking-widest leading-4">
        React <br /> Club
      </span>
    </a>
  );
};
