import React from 'react';

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center mt-48">
      <div
        className="
      animate-spin
      rounded-full
      h-32
      w-32
      border-t-2 border-b-2 border-purple-500
    "
      ></div>
    </div>
  );
};
