import React from "react";
import PropTypes from "prop-types";
//import { Test } from './FeedbackCard.styles';

const FeedbackCard = (props) => (
  <div className="FeedbackCardWrapper">
    <div className="img">a</div>
    <div className="text">
      Dani Fletch I love the idea and belive it’s going to be useful for me.
      frontend developer
    </div>
  </div>
);

FeedbackCard.propTypes = {
  // bla: PropTypes.string,
};

FeedbackCard.defaultProps = {
  // bla: 'test',
};

export default FeedbackCard;
