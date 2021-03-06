import React from 'react';
import cn from 'classnames';

export const Search = ({ className, searchFunc }) => {
  const [query, setQuery] = React.useState('');
  const searchImput = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchFunc(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'right-0 flex items-center w-full lg:w-72 group',
        className
      )}
    >
      <div className="absolute z-50 flex items-center justify-center w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
        <svg
          fill="none"
          className="relative w-5 h-5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <svg
        className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
      </svg>
      <input
        type="text"
        value={query}
        onChange={searchImput.bind(this)}
        className="block w-full h-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 transition focus:ring-blue-200 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
        placeholder="Search"
      />
    </form>
  );
};
