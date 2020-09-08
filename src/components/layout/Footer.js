import React from 'react';
import {link} from 'gatsby';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">Increasing the measurements and optimization of social proof, winning over new customers
        <i><h3>© 2020 Sailsbib Inc.  All rights reserved.</h3></i></p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://pdfhost.io/v/e8pceV0QS_Terms_and_Conditionspdf.pdf"target="_blank">Terms &amp; Conditions</a>
          </li>
          <li>
           <a href="https://pdfhost.io/v/lqRyZLhUZ_Privacy_Policy_for_sailsbib1pdf.pdf"target="_blank">Privacy Policy </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.instagram.com/sailsbib/"target="_blank">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/sailsbib"target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://www.pinterest.com/sailsbib/"target="_blank">Pintrest</a>
          </li>
        </ul>
      </div>
    </div>
    <link rel="manifest" href="/manifest.webmanifest"></link>
  </footer>
);


export default Footer;
