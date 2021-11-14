import React from 'react';
import { Button, Card } from '../components';

export const Catalog = ({ products, filters }) => {
  return (
    <>
      <section className="flex flex-col w-full mt-5">
        <div className="container mx-auto">
          <div className="h-20 rounded-box bg-base-300  place-items-center flex items-center justify-between px-5">
            <ul className="flex ">
              {filters.map((el) => (
                <li
                  key={el.id}
                  className="btn mr-5 no-animation shadow-sm py-2 bg-white text-gray-700 hover:bg-gray-50 border-0"
                >
                  {el.name}
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
                </li>
              ))}
            </ul>
            <Button className="btn-natural px-14">Aply</Button>
          </div>
        </div>
      </section>
      <section className="container  mx-auto mt-8 mb-20">
        <ul className="flex justify-around items-stretch	">
          {products.map((el) => (
            <li key={el.id} className="h-full">
              <Card product={el} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
