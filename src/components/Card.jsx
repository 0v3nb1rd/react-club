import React from 'react';
import monic from '../assets/img/products/aoc.png';

export const Card = ({ product }) => {
  console.log(product);
  return (
    <div className="max-w-xs	h-full">
      <div className=" relative bg-gradient-to-bl from-yellow-100 to-purple-300 shadow-lg sm:rounded-3xl p-8 pt-14  transition transform hover:scale-105 ">
        <div className=" absolute z-10 -inset-x-0 top-0 bg-gradient-to-r from-gray-300 to-yellow-100  h-14 rounded-t-lg ">
          <p className="p-3 leading-7 font-mono text-xl">Item {product.id}</p>
        </div>
        <div className="img h-56 mt-5">
          <img
            className=" object-cover h-full mx-auto"
            src={product.img}
            alt="Card one"
          />
        </div>
        <div className="pb-2 object-fill sm:text-lg mt-5 text-center">
          <h3 className="text-3xl font-bold tracking-wider">{product.title}</h3>
        </div>
        <div>
          <p className="text-justify opacity-70 clump5">{product.shortText}</p>
        </div>
        <div className="text-base sm:text-lg sm:leading-7 flex justify-between pt-6">
          <p className="font-bold text-2xl"> Price :</p>
          <p className="font-mono text-2xl tracking-tighter	">
            $ {product.price}
          </p>
        </div>
        <div className="mt-4">
          <a href className="btn btn-natural btn-block">
            View more
          </a>
        </div>
      </div>
    </div>
  );
};
