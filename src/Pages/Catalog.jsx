import React from 'react';
import { Button, Card, Select } from '../components';

export const Catalog = ({ products, filters }) => {
  return (
    <>
      <section className="flex flex-col w-full mt-5">
        <div className="container mx-auto">
          <div className="h-20 rounded-box bg-base-300  place-items-center flex items-center justify-between px-5">
            <ul className="flex ">
              {filters && filters.map((el) => <Select key={el.id} el={el} />)}
            </ul>
            <Button className="btn-natural px-14">Aply</Button>
          </div>
        </div>
      </section>
      <section className="container  mx-auto mt-8 mb-20">
        <ul className="flex justify-around items-stretch	">
          {products &&
            products.map((el) => (
              <li key={el.id} className="h-full">
                <Card product={el} />
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};
