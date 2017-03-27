import React, { PropTypes } from 'react';
import Rating from '../Rating';
import './style.css';

const Candidate = ({ name, rating }) => (
  <div className="Candidate">
    <img src="http://placehold.it/300x300" alt="test" />
    <h3>{name}</h3>
    <Rating rating={rating} />
  </div>
);

Candidate.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Candidate;
