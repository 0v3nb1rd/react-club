import React from 'react';
import { Logo } from './Logo';
import fImg from '../assets/img/icons/social/f.svg';
import instaImg from '../assets/img/icons/social/insta.svg';
import twitImg from '../assets/img/icons/social/twit.svg';
import ytImg from '../assets/img/icons/social/yt.svg';

export const Footer = () => {
  return (
    <footer className="p-10  bg-base-200">
      <div className="container mx-auto">
        <div className="social flex justify-between items-center">
          <div className="items-center grid-flow-col">
            <h3 className="text-xl font-bold	mb-2">Ʀeact Industries Ltd.</h3>
            <p>
              Best Industries Ltd.
              <br />
              Providing reliable tech since 1995
            </p>
          </div>

          {/* <Logo className="absolute left-0 right-0 justify-center" /> */}

          <div className="md:place-self-center md:justify-self-end">
            <div className="flex max-h-8">
              <a
                href="#"
                className="flex transition transform hover:scale-110 motion-reduce:transform-none"
              >
                <img src={fImg} alt="facebook icon" />
              </a>
              <a
                href="#"
                className="flex ml-3 transition transform hover:scale-110 motion-reduce:transform-none"
              >
                <img src={twitImg} alt="twitter icon" />
              </a>
              <a
                href="#"
                className="flex ml-1 transition transform hover:scale-110 motion-reduce:transform-none"
              >
                <img src={instaImg} alt="insta icon" />
              </a>

              <a
                href="#"
                className="flex ml-1 transition transform hover:scale-110 motion-reduce:transform-none"
              >
                <img src={ytImg} alt="youtube icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="text-center">
          <p>Copyright © 2021 - All right reserved SoftServe</p>
        </div>
      </div>
    </footer>
  );
};
