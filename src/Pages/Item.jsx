import axios from 'axios';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components';

export const Item = () => {
  const { productId } = useParams();
  const [currentProduct, setCurrentProduct] = React.useState({});

  React.useEffect(() => {
    axios.get(`http://localhost:3110/product/${productId}`).then(({ data }) => {
      setCurrentProduct(data);
    });
  }, []);

  return (
    <section className=" bg-base-200">
      <div className="container mx-auto pt-10">
        <div className="flex hero-content mx-auto">
          <img
            src={currentProduct.img}
            className="max-w-sm"
            alt={currentProduct.title}
          />

          <div>
            <div className="badges mb-4">
              <div className="badge badge-primary mx-2">
                {currentProduct.category}
              </div>
              <div className="badge badge-secondary mx-2">
                {currentProduct.brend}
              </div>
            </div>

            <h1 className="mb-5 text-5xl font-bold">{currentProduct.title}</h1>
            <p className="mb-5">{currentProduct.shortText}</p>
          </div>
        </div>
        <div className="info mt-36 flex mx-auto py-12 hero-content justify-between">
          <div className="info-price ml-10">
            <div className=" text-3xl font-bold">
              Price: ${currentProduct.price}
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
