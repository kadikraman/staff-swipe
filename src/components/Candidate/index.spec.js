import React from 'react';
import { shallow } from 'enzyme';
import forEach from 'mocha-each';

import Candidate from './';
import Rating from '../Rating';

describe('Candidate', () => {
  const props = {
    name: 'Mary Strawberry',
    rating: 3,
    imageSrc: 'some/path',
    onAccept: () => 'onAccept',
    onReject: () => 'onReject',
  };

  it('renders the component with the correct props', () => {
    const component = shallow(<Candidate {...props} />);

    const name = component.find('h3');
    expect(name.text()).toBe('Mary Strawberry');

    const rating = component.find(Rating);
    expect(rating.props().rating).toBe(3);

    const image = component.find('img');
    expect(image.props().src).toBe('some/path');
  });

  forEach([
    [
      'been dragged towards accept',
      { accept: true, reject: false },
      '.--accept',
    ],
    [
      'been dragged towards reject',
      { accept: false, reject: true },
      '.--reject',
    ],
    ['been not been dragged enough', { accept: false, reject: false }, ''],
  ]).it(
    'sets the correct styles on the candidate when it has %s',
    (_, newState, expectedClass) => {
      const component = shallow(<Candidate {...props} />);
      component.setState(newState);
      const candidate = component.find(`div.Candidate${expectedClass}`);
      expect(candidate.length).toBe(1);
    },
  );
});
