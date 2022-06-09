import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './WaitlistForm.styles';

const WaitlistForm = (props) => (
 <React.Fragment>
    {
    props.alt ? <div className="flex items-stretch self-center pl-1 pr-0.5 bg-white border-2 border-white rounded focus-within:outline-solid-yellow-500 focus-within:border-yellow-400 w-full sm:w-96">
    <input className='flex-1 p-2 text-xs text-black outline-none sm:p-3 md:text-base' type="text" placeholder='Type your email to join our wait list' />
    <button className='py-2 font-bold text-white bg-red-600 rounded-lg md:text-xl hover:bg-red-500 px-7'>Join</button>
  </div> : <div className="flex items-stretch self-start sm:self-start pl-1 p-0.5 bg-white border-2 border-white rounded focus-within:outline-solid-yellow-500 focus-within:border-yellow-400 w-full sm:w-96">
  <input className='flex-1 p-2 text-xs text-black outline-none sm:p-4 md:text-base' type="text" placeholder='Type your email to join our wait list' />
  <button className='py-2 font-bold text-white bg-red-600 rounded-lg md:text-xl hover:bg-red-500 px-7'>Join</button>
</div>
  }
 </React.Fragment>
);

WaitlistForm.propTypes = {
  // bla: PropTypes.string,
};

WaitlistForm.defaultProps = {
  // bla: 'test',
};

export default WaitlistForm;
