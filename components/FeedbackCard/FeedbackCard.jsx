import React from "react";
import PropTypes from "prop-types";
//import { Test } from './FeedbackCard.styles';

const FeedbackCard = (props) => (
  <div className="flex flex-col items-center">
    <div className="w-24 h-24 bg-green-300 border-4 border-yellow-400 img">a</div>
    <div className="mt-4 text-center">
      <h3 className="text-2xl font-bold text-yellow-500">Dani Fletch</h3>
      <p className="mt-1 mb-4 text-sm">I love the idea and belive it’s going to be useful for me.
      </p>
      <p className="text-sm italic text-gray-400 capitalize">frontend developer</p>
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
