import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Logo from '../../public/images/wordmark-small.svg';
import Image from 'next/image';
//import { Test } from './Footer.styles';

const Footer = (props) => (
  <React.Fragment>
    <footer className="flex flex-col justify-between gap-8 px-6 pt-16 pb-12 mt-12 border-t border-b border-yellow-500 lg:flex-row lg:mr-32">
    <ul className="flex flex-col items-start gap-3">
      <li>
        <div className="logo">
          <Image src={Logo} alt="Veldora" />
        </div>
      </li>
      <Link href="/">
        <li className="uppercase transition-all border-b-2 border-transparent cursor-pointer hover:border-yellow-400">Home</li>
      </Link>
      <Link href="/services">
        <li className="uppercase transition-all border-b-2 border-transparent cursor-pointer hover:border-yellow-400">Services</li>
      </Link>
      <Link href="/about">
        <li className="uppercase transition-all border-b-2 border-transparent cursor-pointer hover:border-yellow-400">About</li>
      </Link>
      <Link href="/contact">
        <li className="uppercase transition-all border-b-2 border-transparent cursor-pointer hover:border-yellow-400">Contact</li>
      </Link>
    </ul>
    <ul className="flex flex-col items-start gap-2 ">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <li className="transition-all border-b-2 border-transparent cursor-pointer hover:border-yellow-400 ">Linkedin</li>
      <li className="transition-all border-b-2 border-transparent cursor-pointer hover:border-yellow-400 ">Facebook</li>
      <li className="transition-all border-b-2 border-transparent cursor-pointer hover:border-yellow-400 ">Instagram</li>
    </ul>
    <ul className="flex flex-col items-start gap-1 ">
      <h2 className="text-3xl font-bold">Misc</h2>
      <li>Frequently Asked Questions</li>
      <li>Documentation</li>
      <li>Security Details</li>
      <Link href="/signup">
      <button className="p-6 py-2 mt-2 italic font-bold text-purple-800 bg-yellow-500">Get started</button>
      </Link>
    </ul>
  </footer>
  <div className="my-10 lg:hidden">
    <p className="text-xs text-center text-gray-300">
      © Veldora 2022 - {new Date().getFullYear()} - All rights reserved.
    </p>
  </div>
  </React.Fragment>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
