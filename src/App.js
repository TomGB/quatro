import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameSelect from './game-select.js'

class App extends Component {
  render() {
    return (
      <div className='selectGameType'>
        <GameSelect />
        <GameSelect />
      </div>
    );
  }
}

export default App;
