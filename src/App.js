import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameSelect from './components/game-select.js';
import PieceSelect from './components/piece-select.js';
import generatePieces from './gameLogic/generate-pieces.js'
import generateBoard from './gameLogic/generate-board.js'

function TurnMessage({text}) {
  return (<h2>{text}</h2>);
}

function GameBoard({board}) {
  return (
    <div className='board'>
      {board.map(row =>
        row.map(piece => {
          if (piece) {
            console.log('in piece');
            (
              <div className='piece'>
                <div className={(piece.tl?'black':'white')+' pieceQuater'}></div>
                <div className={(piece.tr?'black':'white')+' pieceQuater'}></div>
                <div className={(piece.bl?'black':'white')+' pieceQuater'}></div>
                <div className={(piece.br?'black':'white')+' pieceQuater'}></div>
              </div>
            )
          }
        })
      )}
    </div>
  );
}

const game = {
  gameStarted: true,
  pieces: generatePieces(),
  board: generateBoard(),
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
          <GameBoard board={game.board}/>
        </div>
      )
    }
  }
}

export default App;
