import React from 'react';
import { Card } from '../components';

export const Catalog = ({ posts }) => {
  return (
    <>
      <section className="filterGroup">Filter</section>
      <section className="container">
        <ul>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
          <li>Item4</li>
        </ul>
      </section>
      <section className = "container">
      
      <div className="flex flex-wrap">
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
      </section>
      
    </>
  );
};
