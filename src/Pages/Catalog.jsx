import React from 'react';
import { Card } from '../components';

export const Catalog = ({ products }) => {
  return (
    <>
      <section className="filterGroup">Filter</section>
      <section className="container  mx-auto">
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
