import React from 'react';
import { Hero, Post, Button } from '../components';

export const Home = ({ posts }) => {
  const ITEMS_ON_PAGE = 3;
  const [items] = React.useState(posts);
  const [visible, setVisible] = React.useState(ITEMS_ON_PAGE);
  const showMoreItems = () => {
    setVisible((prev) => prev + ITEMS_ON_PAGE);
  };
  const hasPost = () => visible < items.length;

  return (
    <>
      <Hero />
      <section className="container mx-auto -mt-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items &&
            items
              .slice(0, visible)
              .map((post, idx) => <Post key={idx} post={post} />)}
        </div>
        {hasPost() && (
          <Button
            onClick={showMoreItems}
            className="btn-accent btn-outline btn-wide btn-md flex mx-auto mt-10"
          >
            View more
          </Button>
        )}
      </section>
    </>
  );
};
