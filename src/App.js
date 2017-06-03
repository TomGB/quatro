import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameSelect from './game-select.js'

function PieceSelect({text}) {
  return (<h2>{text}</h2>);
}

function TurnMessage({text}) {
  return (<h2>{text}</h2>);
}

function GameBoard({text}) {
  return (<h2>{text}</h2>);
}

const game = {
  gameStarted: true
}

class App extends Component {
  render() {
    if (!game.gameStarted) {
      return (
        <div className='selectGameType'>
          <GameSelect text='Human vs Human'/>
          <GameSelect text='Human vs AI' />
        </div>
      );
    } else {
      return (
        <div className='boardArea'>
          <PieceSelect />
          <TurnMessage text="Humans's turn to do bla"/>
          <GameBoard />
        </div>
      )
    }
  }
}

export default App;
