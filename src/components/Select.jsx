import React from 'react';
import cn from 'classnames';
export const Select = ({ el }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItm, setActiveItm] = React.useState(0);

  React.useEffect(() => {
    document.body.addEventListener('click', hendleOutsideClick);
  }, []);

  const sortRef = React.useRef();

  const hendleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onSelectItm = (idx) => {
    setActiveItm(idx);
    setVisiblePopup(false);
  };

  const activeItem = el.variants[activeItm];
  // func(activeItem);

  // console.log(activeItem);

  return (
    <li className="relative mr-5">
      <div
        ref={sortRef}
        onClick={toggleVisiblePopup}
        className=" btn no-animation shadow-sm py-2 bg-white text-gray-700 hover:bg-gray-50 border-0"
      >
        <span className="filterBy">{activeItem}</span>
        <svg
          className="-mr-1 h-5 w-5 ml-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {visiblePopup && (
        <ul className="overflow-hidden absolute top-full mt-1 z-10 right-0 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          {el.variants &&
            el.variants.map((itm, idx) => (
              <li
                key={idx}
                onClick={() => onSelectItm(idx)}
                href="#"
                className={cn(
                  'block w-full text-left px-4 py-4 font-medium cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                  { 'bg-gray-100': activeItm === idx }
                )}
              >
                <span className="flex flex-col">
                  <span>{itm}</span>
                </span>
              </li>
            ))}
        </ul>
      )}
    </li>
  );
};
