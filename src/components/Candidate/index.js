import React, { PropTypes } from 'react';
import Rating from '../Rating';
import './style.css';

const Candidate = ({ name, rating, imageSrc }) => (
  <div className="Candidate">
    <img className="Candidate__image" src={imageSrc} alt={name} />
    <h3>{name}</h3>
    <Rating rating={rating} />
  </div>
);

Candidate.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Candidate;
