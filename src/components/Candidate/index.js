import React from 'react';
import './style.css';
import Rating from '../Rating';

const Candidate = () => (
  <div className="Candidate">
    <img src="http://placehold.it/300x300" alt="test" />
    <Rating rating={3} />
  </div>
);

export default Candidate;
