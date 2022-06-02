import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Header.styles';

const Header = (props) => (
  <div className="flex items-center justify-between w-full mx-8">
    <div className="logo">
    Veldora
    </div>
    <div className="socials">
      I
    </div>
  </div>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
