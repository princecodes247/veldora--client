import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Header.styles';

const Header = (props) => (
  <div className="HeaderWrapper">
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
