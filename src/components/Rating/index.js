import React, { PropTypes } from 'react';
import Star from '../Star';
import StarFilled from '../StarFilled';

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5].reduce((acc, current) => {
    if (rating >= current) {
      return [...acc, <StarFilled key={current} />];
    }
    return [...acc, <Star key={current} />];
  }, []);

  return (
    <div>
      {stars}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
