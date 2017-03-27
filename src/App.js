import React, { Component } from 'react';
import './App.css';
import Candidate from './components/Candidate';
import Checked from './components/Checked';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App__title">ROTA</h1>
        <Candidate name="Mart Strawberry" rating={3} />
        <div className="App__vote">
          <span className="App__no"><Error /></span>
          <span className="App__yes"><Checked /></span>
        </div>
      </div>
    );
  }
}

export default App;
