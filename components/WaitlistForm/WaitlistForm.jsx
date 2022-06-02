import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './WaitlistForm.styles';

const WaitlistForm = (props) => (
  <div className="flex self-start border-2 border-white w-">
    <input className='p-4' type="text" />
    <button className='text-white bg-red-600'>Join</button>
  </div>
);

WaitlistForm.propTypes = {
  // bla: PropTypes.string,
};

WaitlistForm.defaultProps = {
  // bla: 'test',
};

export default WaitlistForm;
