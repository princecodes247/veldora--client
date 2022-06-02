import React from 'react';
import PropTypes from 'prop-types';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
//import { Test } from './FeedbackSlider.styles';

const FeedbackSlider = (props) => (
  <div className="FeedbackSliderWrapper">
    <div className="relative flex items-center gap-3 pr-12 slider">
    <FeedbackCard/>
    <FeedbackCard/>
    <FeedbackCard/>
    <div className="absolute right-0 w-10 h-10 border-2 border-orange-400 rounded-full nextButton">
      P
    </div>
    </div>
    <div className="markers">
      <div className="marker"></div>
      <div className="marker"></div>
      <div className="marker"></div>
    </div>
  </div>
);

FeedbackSlider.propTypes = {
  // bla: PropTypes.string,
};

FeedbackSlider.defaultProps = {
  // bla: 'test',
};

export default FeedbackSlider;
