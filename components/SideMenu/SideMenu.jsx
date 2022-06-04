import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './SideMenu.styles';

const SideMenu = (props) => (
  <aside className='justify-between flex-col absolute hidden lg:flex lg:sticky right-0  top-0 flex-1 pt-16 border-l border-primary'>
    <aside className="p-8 pr-32">
    <div className="buttons flex border-2 border-primary">
      <button className="uppercase text-xs font-bold p-2 bg-primary text-black">
        Signin
      </button>
      <button className="uppercase text-xs font-bold p-2">
        Login
      </button>
    </div>
    <ul className='flex flex-col gap-4 mt-16'>
      <li className='py-3 pl-8 hover:bg-yellow-800 cursor-pointer transition-all uppercase font-bold text-xs bg-primary border-l-4 border-yellow-600'>Home</li>
      <li className='py-3 pl-8 hover:bg-yellow-800 cursor-pointer transition-all uppercase font-bold text-xs '>Docs</li>
      <li className='py-3 pl-8 hover:bg-yellow-800 cursor-pointer transition-all uppercase font-bold text-xs '>FAQs</li>
      <li className='py-3 pl-8 hover:bg-yellow-800 cursor-pointer transition-all uppercase font-bold text-xs '>Contact</li>
    </ul>
  </aside>
  <div className="hidden lg:block mx-auto my-10">
    <p className="text-center text-xs text-gray-300">
      © Veldora 2022 - {new Date().getFullYear()} - All rights reserved.
    </p>
  </div>
  </aside>
);

SideMenu.propTypes = {
  // bla: PropTypes.string,
};

SideMenu.defaultProps = {
  // bla: 'test',
};

export default SideMenu;
