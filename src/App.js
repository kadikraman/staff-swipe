import React, { Component } from 'react';
import tail from 'lodash/fp/tail';

import './App.css';

import Checked from './components/Checked';
import Error from './components/Error';
import Stack from './components/Stack';

class App extends Component {
  constructor() {
    super();
    this.state = {
      candidates: [
        { name: 'Mary Strawberry', rating: 3 },
        { name: 'Merry Berry', rating: 5 },
        { name: 'Cherry Licious', rating: 4 },
        { name: 'Extra Candidate', rating: 1 },
        { name: 'Extra Candidate2', rating: 2 },
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
        <Stack candidates={candidates} />
        <div className="App__vote" onClick={this.onClick}>
          <span className="App__no"><Error /></span>
          <span className="App__yes"><Checked /></span>
        </div>
      </div>
    );
  }
}

export default App;
