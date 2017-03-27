import React, { PropTypes } from 'react';
import classnames from 'classnames';
import take from 'lodash/fp/take';

import Candidate from '../Candidate';

import './style.css';

const Stack = ({ candidates, onAccept, onReject }) => (
  <div className="Stack">
    {take(3, candidates).map((candidate, index) => (
      <div
        className={classnames('Stack__candidate', {
          '--top': index === 0,
          '--middle': index === 1,
          '--bottom': index === 2,
        })}
        key={candidate.name}
      >
        <Candidate {...candidate} onAccept={onAccept} onReject={onReject} />
      </div>
    ))}
  </div>
);

Stack.propTypes = {
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imageSrc: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onAccept: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
};

export default Stack;
