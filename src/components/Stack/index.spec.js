import React from 'react';
import { shallow } from 'enzyme';

import Stack from './';
import Candidate from '../Candidate';

describe('Stack', () => {
  it('renders a candidate correctly', () => {
    const props = {
      candidates: [
        {
          name: 'Mary Strawberry',
          rating: 3,
        },
      ],
    };

    const component = shallow(<Stack {...props} />);

    const candidate = component.find(Candidate);
    expect(candidate.props().name).toBe('Mary Strawberry');
    expect(candidate.props().rating).toBe(3);
  });

  it('renders 3 candidates with the correct classes', () => {
    const props = {
      candidates: [
        { name: 'Mary Strawberry', rating: 3 },
        { name: 'Merry Berry', rating: 5 },
        { name: 'Cherry Licious', rating: 4 },
      ],
    };

    const component = shallow(<Stack {...props} />);
    const candidates = component.find(Candidate);

    expect(candidates.length).toBe(3);

    expect(candidates.at(0).props().name).toBe('Mary Strawberry');
    expect(candidates.at(0).parent().props().className).toContain(
      'Stack__candidate --top',
    );

    expect(candidates.at(1).props().name).toBe('Merry Berry');
    expect(candidates.at(1).parent().props().className).toContain(
      'Stack__candidate --middle',
    );

    expect(candidates.at(2).props().name).toBe('Cherry Licious');
    expect(candidates.at(2).parent().props().className).toContain(
      'Stack__candidate --bottom',
    );
  });

  it('only renders the first 3 candidates if more are passed in', () => {
    const props = {
      candidates: [
        { name: 'Mary Strawberry', rating: 3 },
        { name: 'Merry Berry', rating: 5 },
        { name: 'Cherry Licious', rating: 4 },
        { name: 'Extra Candidate', rating: 0 },
      ],
    };

    const component = shallow(<Stack {...props} />);
    const candidates = component.find(Candidate);

    expect(candidates.length).toBe(3);
  });
});
