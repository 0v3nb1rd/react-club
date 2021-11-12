import React from 'react';
import { Header, Footer, Hero, Post, Button } from '../components';

export const Home = ({ posts }) => {
  return (
    <>
      <Hero />
      <section className="container mx-auto -mt-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <Post key={idx} post={post} />
          ))}
        </div>

        <Button className="btn-accent btn-outline btn-wide btn-md flex mx-auto mt-10">
          View more
        </Button>
      </section>
    </>
  );
};