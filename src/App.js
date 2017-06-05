import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameSelect from './components/game-select.js'
import PieceSelect from './components/piece-select.js'
import Piece from './components/piece.js'
import generatePieces from './gameLogic/generate-pieces.js'

function TurnMessage({text}) {
  return (<h2>{text}</h2>);
}

function GameBoard({board}) {
  return (
    <div className='board'>
      {
        board.map(row =>
          <div className='row'>
            {
              row.map(space =>
                <div className='space' key={space.id}>
                  {space.piece?
                    <Piece piece={space.piece}/>
                  : null}
                </div>
              )
            }
          </div>
        )
      }
    </div>
  )
}

const game = {
  gameStarted: true,
  pieces: generatePieces(),
  board: generateBoard(),
}

console.log(game.board);

class App extends Component {
  constructor() {
    super();
    this.state = {
      history: [
        {
          board: Array(4).fill(Array(4).fill());
        }
      ]
    };
  }

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
          <GameBoard board={game.board}/>
        </div>
      )
    }
  }
}

export default App;
