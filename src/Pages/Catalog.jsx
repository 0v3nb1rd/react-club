import React from 'react';
import { Button, Card, Select, Search } from '../components';
import { Spinner } from '../components';
import axios from 'axios';

export const Catalog = ({ products, filters }) => {
  const [items, setItems] = React.useState([]);
  const [spinner, setSpinner] = React.useState(true);

  const refFilterBy = React.useRef();

  React.useEffect(() => {
    axios.get('http://localhost:3110/products').then(({ data }) => {
      setItems(data);
      setTimeout(() => setSpinner(false), 500);
    });
  }, []);

  const onFilterClick = (e) => {
    const catName = ['cat', 'brend', 'sortBy'];
    const filterParam = [];
    refFilterBy.current.querySelectorAll('.filterBy').forEach((el, idx) => {
      filterParam.push(`${catName[idx]}=${el.textContent.replace(/ /g, '')}`);
    });
    const param = '?' + filterParam.join('&');

    axios.get(`http://localhost:3110/${param}`).then(({ data }) => {
      // console.log(data);
      return data;
      // setItems(data);
      // setTimeout(() => setSpinner(false), 500);
    });

    // const [catName, brandName, sortVal] = refFilterBy.current.querySelectorAll(
    //   '.filterBy'
    // );
    // filterByCat(catName.textContent);
    // filterByBrend(brandName.textContent);
    // SortBy(sortVal.textContent);
  };

  // ! Filters && Sort
  // const filterByCat = (catName) => {
  //   if (catName === filters[0].name) return;

  //   setItems((el) => products.filter((itm) => itm.category === catName));
  // };

  // const filterByBrend = (brandName) => {
  //   if (brandName === filters[1].name) return;

  //   setItems((el) => products.filter((itm) => itm.brend === brandName));
  // };
  // const SortBy = (sortVal) => {
  //   if (sortVal === filters[2].name) {
  //     return;
  //     // return setItems((items) => [...items]);
  //   }
  //   if (sortVal === 'lower price') {
  //     setItems([...products].sort((prev, next) => prev.price - next.price));
  //   }
  //   if (sortVal === 'upper price') {
  //     setItems([...products].sort((prev, next) => next.price - prev.price));
  //   }
  // };

  //// ! Serch input
  const dataSerchProducts = (query) => {
    const newItem = products.filter((itm) => {
      return Object.keys(itm).some((key) =>
        itm[key]
          .toString()
          .toLowerCase()
          .includes(query.toString().toLowerCase())
      );
    });
    setItems(newItem);
  };

  return (
    <>
      <section className="flex flex-col w-full mt-5">
        <div className="container mx-auto relative">
          <Search
            className="h-12 z-110 bottom-full fixed top-4 left-3/4"
            searchFunc={dataSerchProducts}
          />
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="h-20 rounded-box bg-base-300  place-items-center flex items-center justify-between px-5">
              <ul className="flex" ref={refFilterBy}>
                {filters &&
                  filters.map((el) => (
                    <Select key={el.id} el={el} refFilterBy={refFilterBy} />
                  ))}
              </ul>

              <Button onClick={onFilterClick} className="btn-natural px-14">
                Aply
              </Button>
            </div>
          </form>
        </div>
      </section>
      <section className="container  mx-auto mt-3 mb-10">
        {spinner ? (
          <Spinner className="" />
        ) : (
          <ul className="flex  items-stretch flex-wrap">
            {items.map((el) => (
              <li key={el.id} className="h-full my-4 mx-8">
                <Card product={el} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};
