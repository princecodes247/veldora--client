import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './SideMenu.styles';

const SideMenu = (props) => (
  <aside className="absolute hidden lg:block lg:sticky right-0  top-0 flex-1 p-8 pt-16 border-l border-yellow-400">
    <div className="buttons flex border-2 border-yellow-400">
      <button className="uppercase text-xs font-bold p-2 bg-yellow-400 text-black">
        Signin
      </button>
      <button className="uppercase text-xs font-bold p-2">
        Login
      </button>
    </div>
    <ul className='flex flex-col gap-4 mt-16'>
      <li className='py-3 pl-8 hover:bg-yellow-800 cursor-pointer transition-all uppercase font-bold text-xs bg-yellow-900 border-l-4 pl-8 border-yellow-600'>Home</li>
      <li className='py-3 pl-8 hover:bg-yellow-800 cursor-pointer transition-all uppercase font-bold text-xs '>Docs</li>
      <li className='py-3 pl-8 hover:bg-yellow-800 cursor-pointer transition-all uppercase font-bold text-xs '>FAQs</li>
      <li className='py-3 pl-8 hover:bg-yellow-800 cursor-pointer transition-all uppercase font-bold text-xs '>Contact</li>
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
