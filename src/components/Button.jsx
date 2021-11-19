import React from 'react';
import cn from 'classnames';

export const Button = (props) => {
  const { onClick, className, children } = props;

  return (
    <button onClick={onClick} className={cn('btn', className)}>
      {children}
    </button>
  );
};
