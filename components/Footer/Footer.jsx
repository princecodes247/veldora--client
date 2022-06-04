import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
//import { Test } from './Footer.styles';

const Footer = (props) => (
  <footer className="flex justify-between px-6 pt-16 pb-32 mt-12 mr-32 border-t border-yellow-500">
    <ul className="flex flex-col gap-3">
      <li>
        <div className="logo"></div>
      </li>
      <Link href="/">
        <li className="uppercase">Home</li>
      </Link>
      <Link href="/services">
        <li className="uppercase">Services</li>
      </Link>
      <Link href="/about">
        <li className="uppercase">About</li>
      </Link>
      <Link href="/contact">
        <li className="uppercase">Contact</li>
      </Link>
    </ul>
    <ul className="flex flex-col gap-2">
      <h2 className="text-3xl">Contact Us</h2>
      <li>Linkedin</li>
      <li>Facebook</li>
      <li>Instagram</li>
    </ul>
    <ul className="flex flex-col gap-1">
      <h2 className="text-3xl">Misc</h2>
      <li>Frequently Asked Questions</li>
      <li>Documentation</li>
      <li>Security Details</li>
      <Link href="/signup">
      <button className="p-6 py-2 mt-2 italic font-bold text-purple-800 bg-yellow-500">Get started</button>
      </Link>
    </ul>
  </footer>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
