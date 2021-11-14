import React from 'react';
import monic from '../assets/img/products/aoc.png';

export const Card = () => {
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-10 max-w-xs	">
      <div className="relative py-10">
        <div className="relative bg-gradient-to-bl from-yellow-100 to-purple-300 shadow-lg sm:rounded-3xl p-8">
          <div className=" absolute z-10 -inset-x-0 top-0 bg-gradient-to-r from-gray-300 to-yellow-100  h-14 rounded-t-lg ">
            <p className="p-3 leading-7 font-mono text-xl"> Item 1</p>
          </div>
          <div>
            <img
              className="w-full h-full mt-11"
              src={monic}
              alt="Card one"
              className="py-3 sm:h-98 "
            />
          </div>
          <div className="pb-2 sm:text-lg mt-5 text-center">
            <h3 className="text-3xl font-bold tracking-wider">Amazing staff</h3>
          </div>
          <div>
            <p className="text-justify opacity-70 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              iste harum sed facilis repellat architecto quaerat aut impedit
              voluptates doloribus veritatis, dicta perferendis ducimus
              delectus.
            </p>
          </div>
          <div className="text-base sm:text-lg sm:leading-7 flex justify-between pt-6">
            <p className="font-bold text-2xl"> Price :</p>
            <p className="font-mono text-2xl tracking-tighter	">$ 2415</p>
          </div>
          <div className="mt-4">
            <a href className="btn btn-natural btn-block">
              View more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
