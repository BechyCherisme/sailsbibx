import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../Button';
import {link} from 'gatsby';
import ghost2 from '../../images/ghost2.png';
const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3"><div>
          <img src={ghost2} alt="sailsbib market perspective aero" />
          </div>




        </div>
        Sailsbib
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
        Concepts
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Prospects
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        

        <a className="text-sm" href="https://mailchi.mp/24e94c1a9ca3/market-analysis"target="_blank"> <Button>Request A Quote</Button> </a>
        
        
      </div>
    </div>
  </header>
);

export default Header;
