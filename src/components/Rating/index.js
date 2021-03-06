import React, { PropTypes } from 'react';
import Star from '../Star';
import StarFilled from '../StarFilled';

const Rating = ({ rating }) => (
  <div>
    {[1, 2, 3, 4, 5].reduce(
      (acc, current) => {
        if (rating >= current) {
          return [...acc, <StarFilled key={current} />];
        }
        return [...acc, <Star key={current} />];
      },
      [],
    )}
  </div>
);

Rating.propTypes = {
  rating: PropTypes.oneOf([0, 1, 2, 3, 4, 5]).isRequired,
};

export default Rating;
