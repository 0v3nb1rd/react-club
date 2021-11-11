import React from 'react';
import heroImg from '../assets/img/hero.jpg';

export const Hero = () => {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="flex hero-content justify-center">
        <img
          src={heroImg}
          className="max-w-xl rounded-lg shadow-2xl"
          alt="Hero images"
        />
        <div>
          <h1 className="mb-5 text-5xl font-bold">Welcome to React Club 👋</h1>
          <p className="mb-5">
            We offer an assortment of quality services to build and preserve the
            public image of your brand. Our dedicated and experienced
            professionals specialize in crisis communication, content marketing
            and social media management. <br />
            It's awesome! Join us, and you feal it 🙈
          </p>
        </div>
      </div>
    </section>
  );
};
