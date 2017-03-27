import React from 'react';
import { shallow } from 'enzyme';

import Candidate from './';
import Rating from '../Rating';

describe('Candidate', () => {
  it('renders the component with the correct props', () => {
    const props = {
      name: 'Mary Strawberry',
      rating: 3,
      imageSrc: 'some/path',
    };

    const component = shallow(<Candidate {...props} />);

    const name = component.find('h3');
    expect(name.text()).toBe('Mary Strawberry');

    const rating = component.find(Rating);
    expect(rating.props().rating).toBe(3);

    const image = component.find('img');
    expect(image.props().src).toBe('some/path');
  });
});
