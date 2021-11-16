import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components';

export const Item = ({ products }) => {
  const { productId } = useParams();
  const curentProduct = products[productId - 1];

  return (
    <section className=" bg-base-200">
      <div className="container mx-auto pt-10">
        <div className="flex hero-content mx-auto">
          <img
            src={curentProduct.img}
            className="max-w-sm"
            alt={curentProduct.title}
          />

          <div>
            <div className="badges mb-4">
              <div className="badge badge-primary mx-2">Monitors</div>
              <div className="badge badge-secondary mx-2">television</div>
            </div>

            <h1 className="mb-5 text-5xl font-bold">{curentProduct.title}</h1>
            <p className="mb-5">{curentProduct.shortText}</p>
          </div>
        </div>
        <div className="info mt-36 flex mx-auto py-12 hero-content justify-between">
          <div className="info-price ml-10">
            <div className=" text-3xl font-bold">
              Price: ${curentProduct.price}
            </div>
          </div>
          <div className="info-buttons">
            <Link to="/catalog" className="btn btn-natural btn-outline">
              Go back
            </Link>
            <Button className="btn-natural ml-5">Add to cart</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
