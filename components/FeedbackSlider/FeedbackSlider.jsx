import React from 'react';
import PropTypes from 'prop-types';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
//import { Test } from './FeedbackSlider.styles';

const FeedbackSlider = (props) => (
  <div className="FeedbackSliderWrapper">
    <div className="slider">
    <FeedbackCard/>
    <FeedbackCard/>
    <FeedbackCard/>
    <div className="nextButton">
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
