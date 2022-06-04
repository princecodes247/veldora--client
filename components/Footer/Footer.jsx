import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Logo from '../../public/images/wordmark-small.svg';
import Image from 'next/image';
//import { Test } from './Footer.styles';

const Footer = (props) => (
  <React.Fragment>
    <footer className="flex flex-col border-b gap-8 lg:flex-row justify-between px-6 pt-16 pb-12 mt-12 lg:mr-32 border-t border-yellow-500">
    <ul className="flex flex-col items-start gap-3">
      <li>
        <div className="logo">
          <Image src={Logo} alt="Veldora" />
        </div>
      </li>
      <Link href="/">
        <li className="hover:border-b-2 transition-all cursor-pointer border-yellow-400 uppercase">Home</li>
      </Link>
      <Link href="/services">
        <li className="hover:border-b-2 transition-all cursor-pointer border-yellow-400 uppercase">Services</li>
      </Link>
      <Link href="/about">
        <li className="hover:border-b-2 transition-all cursor-pointer border-yellow-400 uppercase">About</li>
      </Link>
      <Link href="/contact">
        <li className="hover:border-b-2 transition-all cursor-pointer border-yellow-400 uppercase">Contact</li>
      </Link>
    </ul>
    <ul className=" flex flex-col items-start gap-2">
      <h2 className="font-bold text-3xl">Contact Us</h2>
      <li className="hover:border-b-2 transition-all cursor-pointer border-yellow-400 ">Linkedin</li>
      <li className="hover:border-b-2 transition-all cursor-pointer border-yellow-400 ">Facebook</li>
      <li className="hover:border-b-2 transition-all cursor-pointer border-yellow-400 ">Instagram</li>
    </ul>
    <ul className=" flex flex-col items-start gap-1">
      <h2 className="font-bold text-3xl">Misc</h2>
      <li>Frequently Asked Questions</li>
      <li>Documentation</li>
      <li>Security Details</li>
      <Link href="/signup">
      <button className="p-6 py-2 mt-2 italic font-bold text-purple-800 bg-yellow-500">Get started</button>
      </Link>
    </ul>
  </footer>
  <div className="lg:hidden my-10">
    <p className="text-center text-xs text-gray-300">
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
