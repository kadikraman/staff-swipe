import React, { Component } from 'react';
import tail from 'lodash/fp/tail';

import './App.css';

import Accept from './components/Accept';
import Reject from './components/Reject';
import Stack from './components/Stack';

import mrsPotts from './assets/mrs-potts.jpg';
import chip from './assets/chip.jpg';
import featherDuster from './assets/feather-duster.jpg';
import lumiere from './assets/lumiere.jpg';
import cogsworth from './assets/cogsworth.jpg';

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
      accepted: [],
      rejected: [],
    };
  }

  onClick = () => {
    this.setState({
      candidates: tail(this.state.candidates),
    });
  };

  render() {
    const { candidates } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">ROTA</h1>
        <Stack
          candidates={candidates}
          onAccept={this.onClick}
          onReject={this.onClick}
        />
        <div className="App__vote">
          <button className="App__no App__button" onClick={this.onClick}>
            <Reject />
          </button>
          <button className="App__yes App__button" onClick={this.onClick}>
            <Accept />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
