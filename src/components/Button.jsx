import React from 'react';
import cn from 'classnames';

export const Button = (props) => {
  const { className, children } = props;

  return <button className={cn('btn', className)}>{children}</button>;
};
