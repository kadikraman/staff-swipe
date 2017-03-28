import React, { Component } from 'react';
import tail from 'lodash/fp/tail';

import Accept from './components/Accept';
import Reject from './components/Reject';
import Stack from './components/Stack';
import { CANDIDATE_ID } from './components/Candidate';

import mrsPotts from './assets/mrs-potts.jpg';
import chip from './assets/chip.jpg';
import featherDuster from './assets/feather-duster.jpg';
import lumiere from './assets/lumiere.jpg';
import cogsworth from './assets/cogsworth.jpg';

import './App.css';

const animate = animationClass => {
  document.getElementById(
    CANDIDATE_ID,
  ).className += ` animated ${animationClass}`;
};
const animateAccept = () => animate('fadeOutRight');
const animateReject = () => animate('fadeOutLeft');

const timeout = fn =>
  setTimeout(
    () => {
      fn();
    },
    500,
  );

class App extends Component {
  constructor() {
    super();
    this.state = {
      candidates: [
        { name: 'Mrs. Potts', rating: 5, imageSrc: mrsPotts },
        { name: 'Chip', rating: 3, imageSrc: chip },
        { name: 'Feather Duster', rating: 4, imageSrc: featherDuster },
        { name: 'Lumière', rating: 5, imageSrc: lumiere },
        { name: 'Cogsworth', rating: 2, imageSrc: cogsworth },
      ],
      acceptedCount: 0,
      rejectedCount: 0,
    };
  }

  onAccept = () => {
    const { candidates, acceptedCount } = this.state;

    if (!candidates.length) return;

    animateAccept();
    timeout(() =>
      this.setState({
        candidates: tail(candidates),
        acceptedCount: acceptedCount + 1,
      }));
  };

  onReject = () => {
    const { candidates, rejectedCount } = this.state;

    if (!candidates.length) return;

    animateReject();
    timeout(() =>
      this.setState({
        candidates: tail(candidates),
        rejectedCount: rejectedCount + 1,
      }));
  };

  render() {
    const { candidates, acceptedCount, rejectedCount } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">ROTA</h1>
        <Stack
          candidates={candidates}
          onAccept={this.onAccept}
          onReject={this.onReject}
        />
        <div className="App__vote">
          <button className="App__button --left" onClick={this.onReject}>
            <Reject />
            <div className="App__rejectedCount">{rejectedCount}</div>
          </button>
          <button className="App__button --right" onClick={this.onAccept}>
            <Accept />
            <div className="App__acceptedCount">{acceptedCount}</div>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
