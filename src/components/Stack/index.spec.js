import React from 'react';
import { shallow } from 'enzyme';
import take from 'lodash/fp/take';

import Stack from './';
import Candidate from '../Candidate';

describe('Stack', () => {
  const sampleCandidates = [
    { name: 'Mary Strawberry', rating: 3, imageSrc: 'some/path' },
    { name: 'Merry Berry', rating: 5, imageSrc: 'some/path' },
    { name: 'Cherry Licious', rating: 4, imageSrc: 'some/path' },
    { name: 'Extra Candidate', rating: 0, imageSrc: 'some/path' },
  ];

  const mockHandlers = {
    onAccept: () => 'onAccept',
    onReject: () => 'onReject',
  };

  it('renders a candidate correctly', () => {
    const props = { candidates: take(1, sampleCandidates), ...mockHandlers };

    const component = shallow(<Stack {...props} />);

    const candidate = component.find(Candidate);
    expect(candidate.props().name).toBe('Mary Strawberry');
    expect(candidate.props().rating).toBe(3);
    expect(candidate.props().imageSrc).toBe('some/path');
    expect(candidate.props().onAccept()).toBe('onAccept');
    expect(candidate.props().onReject()).toBe('onReject');
  });

  it('renders 3 candidates with the correct classes', () => {
    const props = { candidates: take(3, sampleCandidates), ...mockHandlers };

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
    const props = { candidates: take(4, sampleCandidates), ...mockHandlers };

    const component = shallow(<Stack {...props} />);
    const candidates = component.find(Candidate);

    expect(candidates.length).toBe(3);
  });

  it('does renders a placeholder when there are no candidates', () => {
    const props = { candidates: [], ...mockHandlers };

    const component = shallow(<Stack {...props} />);
    const placeholder = component.find('.Stack__placeholder');

    expect(placeholder.length).toBe(1);
    expect(placeholder.text()).toBe('No more candidates.');
  });

  it('does not render a placeholder when there are candidates', () => {
    const props = { candidates: take(1, sampleCandidates), ...mockHandlers };

    const component = shallow(<Stack {...props} />);
    const placeholder = component.find('.Stack__placeholder');

    expect(placeholder.length).toBe(0);
  });
});
