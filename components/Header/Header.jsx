import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Header.styles';
import Logo from '../../public/images/wordmark.svg';
import Image from 'next/image';

const Header = (props) => (
  <header className="flex items-center justify-between pt-6 pb-0 pr-4 lg:mr-24 border-b border-gray-200">
    <div className="logo">
      <Image src={Logo} alt="Veldora" />
    </div>
    <div className="socials">
      I
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
