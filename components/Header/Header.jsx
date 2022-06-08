import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Header.styles';
import Logo from '../../public/images/wordmark.svg';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai"

const Header = (props) => (
  <header className="flex items-center justify-between pt-2 pb-0 pr-4 lg:mr-24 border-b border-gray-200">
    <Link href="/">
    <div className="logo w-36  cursor-pointer">
      <Image src={Logo} alt="Veldora" />
    </div>
    </Link>
    <div className="socials  pb-2 flex gap-2 items-center">
      
      <Link href="/">
        <AiFillFacebook size={20} className="text-white cursor-pointer hover:text-primary" />
      </Link>
      
      <Link href="/">
        <AiFillGithub size={20} className="text-white cursor-pointer hover:text-primary" />  
      </Link>
      
      <Link href="/">
        <AiFillInstagram size={20} className="text-white cursor-pointer hover:text-primary"/>
      </Link>
      
      <Link href="/">
        <AiFillTwitterSquare size={20} className="text-white cursor-pointer hover:text-primary"/>
      </Link>
    </div>
  </header>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
