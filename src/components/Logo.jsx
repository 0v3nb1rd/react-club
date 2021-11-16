import React from 'react';
import logoImg from '../assets/img/logo.svg';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export const Logo = (props) => {
  const { className } = props;

  return (
    <Link to="/" className={cn('logo px-2 flex items-center', className)}>
      <img className="mr-2" src={logoImg} alt="logo " />
      <span className="text-lg font-bold uppercase font-mono tracking-widest leading-4">
        React <br /> Club
      </span>
    </Link>
  );
};
