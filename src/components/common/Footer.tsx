
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 pb-6 bg-dreamBlue/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-4/12 px-4">
            <h4 className="text-3xl font-dancing text-primary mb-4">Lucid AI</h4>
            <p className="text-sm mt-0 mb-2 text-white/70">
              Explore your dreams and uncover their hidden meanings with our dream analyzer and visualizer.
            </p>
            <div className="mt-6">
              <button className="bg-white text-dreamBlue shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex">
                <i className="text-lg">✦</i>
              </button>
              <button className="bg-white text-dreamBlue shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex">
                <i className="text-lg">✧</i>
              </button>
              <button className="bg-white text-dreamBlue shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex">
                <i className="text-lg">⋆</i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-8/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white/80 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/about" className="text-white/60 hover:text-primary font-semibold block pb-2 text-sm">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-white/60 hover:text-primary font-semibold block pb-2 text-sm">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-white/60 hover:text-primary font-semibold block pb-2 text-sm">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-white/60 hover:text-primary font-semibold block pb-2 text-sm">Terms of Service</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-4/12 px-4">
                <span className="block uppercase text-white/80 text-sm font-semibold mb-2">Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/dream-journal" className="text-white/60 hover:text-primary font-semibold block pb-2 text-sm">Dream Journal</Link>
                  </li>
                  <li>
                    <Link to="/dream-input" className="text-white/60 hover:text-primary font-semibold block pb-2 text-sm">New Dream Analysis</Link>
                  </li>
                  <li>
                    <Link to="/login" className="text-white/60 hover:text-primary font-semibold block pb-2 text-sm">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup" className="text-white/60 hover:text-primary font-semibold block pb-2 text-sm">Sign Up</Link>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-4/12 px-4">
                <span className="block uppercase text-white/80 text-sm font-semibold mb-2">Features</span>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="text-white/60 hover:text-primary font-semibold block pb-2 text-sm">Dream Analysis</Link>
                  </li>
                  <li>
                    <Link to="/" className="text-white/60 hover:text-primary font-semibold block pb-2 text-sm">Dream Visualization</Link>
                  </li>
                  <li>
                    <Link to="/" className="text-white/60 hover:text-primary font-semibold block pb-2 text-sm">Dream Journaling</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white/10" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-white/50 font-semibold py-1">
              © {new Date().getFullYear()} Lucid AI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
