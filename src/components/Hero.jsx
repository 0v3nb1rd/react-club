import React from 'react';

export const Hero = () => {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="flex hero-content justify-center">
        <img
          src="https://picsum.photos/id/1005/600/600"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="footer images"
        />
        <div>
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </section>
  );
};
