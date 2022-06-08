import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
//import { Test } from './SideMenu.styles';

const SideMenu = (props) => {
  // bg-primary border-l-4 border-yellow-600
  useEffect(() => {
    console.log('SideMenu.jsx: useEffect');
    // Check current url and set active class
    const currentUrl = window.location.pathname;

  }, []);

return (
  <aside className='justify-between flex-col absolute hidden lg:flex lg:sticky right-0  top-0  pt-16 border-l border-primary'>
    <aside className="p-8 pr-20">
    <div className="buttons flex border-2 border-primary">
    <Link href="/auth/signup">
      <button className="uppercase px-6 text-xs font-bold p-2 bg-primary hover:brightness-110 text-black">
        Signup
      </button>
    </Link>
    <Link href="/auth/login">

      <button className="uppercase px-6 text-xs bg-primary bg-opacity-0 hover:bg-opacity-20 transition-all font-bold p-2">
        Login
      </button>
    </Link>
    </div>
    <ul className='flex flex-col gap-4 mt-16'>
      <Link href="/waitlist">
      <li className='py-3 pl-8 hover:bg-primary hover:bg-opacity-20 bg-gradient-to-r from-primary cursor-pointer transition-all uppercase font-bold text-xs'>Home</li>
      </Link>
      <Link href="/docs">
      <li className='py-3 pl-8 hover:bg-primary hover:bg-opacity-20 cursor-pointer transition-all uppercase font-bold text-xs '>Docs</li>
      </Link>
      <Link href="/faqs">
      <li className='py-3 pl-8 hover:bg-primary hover:bg-opacity-20 cursor-pointer transition-all uppercase font-bold text-xs '>FAQs</li>
      </Link>
      <Link href="/contact">
      <li className='py-3 pl-8 hover:bg-primary hover:bg-opacity-20 cursor-pointer transition-all uppercase font-bold text-xs '>Contact</li>
      </Link>
    </ul>
  </aside>
  <div className="hidden lg:block mx-auto my-10">
    <p className="text-center text-xs text-gray-300">
      © Veldora 2022 - {new Date().getFullYear()} - All rights reserved.
    </p>
  </div>
  </aside>
)
};

SideMenu.propTypes = {
  // bla: PropTypes.string,
};

SideMenu.defaultProps = {
  // bla: 'test',
};

export default SideMenu;
