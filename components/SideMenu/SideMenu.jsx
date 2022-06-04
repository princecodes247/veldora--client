import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './SideMenu.styles';

const SideMenu = (props) => (
  <aside className="flex-1 p-8 border-l-2 border-yellow-400">
    <div className="buttons">
      <button className="dno">
        Signin
      </button>
      <button className="dno">
        Login
      </button>
    </div>
    <ul>
      <li>Home</li>
      <li>Docs</li>
      <li>FAQs</li>
      <li>Contact</li>
    </ul>
  </aside>
);

SideMenu.propTypes = {
  // bla: PropTypes.string,
};

SideMenu.defaultProps = {
  // bla: 'test',
};

export default SideMenu;
