import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Footer.styles';

const Footer = (props) => (
  <footer className="">
  <a
    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    Poweredjjjja by{" "}
    <span className="">
      {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
    </span>
  </a>
</footer>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
