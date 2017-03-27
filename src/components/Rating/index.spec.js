import React from 'react';
import { shallow } from 'enzyme';
import forEach from 'mocha-each';

import Rating from './';
import Star from '../Star';
import StarFilled from '../StarFilled';

describe('Rating', () => {
  forEach([0, 1, 2, 3, 4, 5])
    .it('renders the correct stars when the rating is %s', rating => {
      const component = shallow(<Rating rating={rating} />);
      const filledStars = component.find(StarFilled);
      const unfilledStars = component.find(Star);

      expect(filledStars.length).toBe(rating);
      expect(unfilledStars.length).toBe(5 - rating);
    });

  it('renders the stars in correct order', () => {
    const component = shallow(<Rating rating={3} />);
    expect(component.childAt(0).type()).toEqual(StarFilled);
    expect(component.childAt(1).type()).toEqual(StarFilled);
    expect(component.childAt(2).type()).toEqual(StarFilled);
    expect(component.childAt(3).type()).toEqual(Star);
    expect(component.childAt(4).type()).toEqual(Star);
  });
});
