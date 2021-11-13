import React from 'react';

export const Card = () => {
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-10">
      <div className="relative py-10 sm:mx-52">
        <div className="relative bg-gradient-to-bl from-yellow-100 to-purple-300 shadow-lg sm:rounded-3xl p-16 ">
          <div className=" absolute z-10 -inset-x-0 top-0 bg-gradient-to-r from-gray-300 to-yellow-100  h-14 rounded-t-lg ">
            <p className="p-3 leading-7 font-mono text-xl"> Item 1</p>
          </div>
          <div>
            <img
              className="w-full h-full mt-11"
              src="http://placehold.it/500/100"
							alt="Card one"
              className="py-3 sm:h-98 "
            />
          </div>
          <div className="pb-4 sm:text-lg mt-5 text-center">
            <h1 className="text-3xl font-black tracking-wider">
              Amazing staff
            </h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              iste harum sed facilis repellat architecto quaerat aut impedit
              voluptates doloribus veritatis, dicta perferendis ducimus
              delectus.{' '}
            </p>
          </div>
          <div className="text-base sm:text-lg sm:leading-7 flex justify-between pt-8">
            <p className="font-bold text-2xl"> Price : </p>
            <p className="font-mono text-2xl">$ 2415</p>
          </div>
          <div className="ml-20 mb-1 py-4 my-5  text-center bg-green-500 opacity rounded-2xl w-60 shadow-md hover:bg-green-700">
            <a href="#" className="text-blue-50 font-semibold no-underline">
              {' '}
              View more{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
