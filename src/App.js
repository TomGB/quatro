import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameSelect from './game-select.js'

function PieceSelect({pieces}) {

  return (
    <div className='selectme'>
      {pieces.map(piece =>
        (<h1>hi</h1>)
      )}
    </div>
  );
}

function TurnMessage({text}) {
  return (<h2>{text}</h2>);
}

function GameBoard({text}) {
  return (<h2>{text}</h2>);
}

const game = {
  gameStarted: true,
  pieces: [
    {
      tl: 1,
      tr: 1,
      bl:1,
      br:1
    },
    {
      tl: 1,
      tr: 0,
      bl:0,
      br:1
    },
    {
      tl: 0,
      tr: 0,
      bl:0,
      br:0
    }
  ]
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
        <div className='gameArea'>
          <PieceSelect pieces={game.pieces}/>
          <TurnMessage text="Humans's turn to do bla"/>
          <GameBoard />
        </div>
      )
    }
  }
}

export default App;
