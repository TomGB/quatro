import React, { Component } from 'react';
import './App.css';
import GameSelect from './components/game-select'
import PieceSelect from './components/piece-select'
import Piece from './components/piece'
import generatePieces from './gameLogic/generate-pieces'
import checkWin from './gameLogic/check-win'
import GameBoard from './components/game-board'
import PlayerMessage from './components/playerMessage'

function SelectedPiece({piece}) {
  return (
    <div className='selectedPieceArea'>
      <h2> Selected Piece: </h2>
      <div className='selectedPiece'>
        {piece?
          <Piece piece={piece} />
        : null}
      </div>
    </div>
  )
}

function generateBoard() {
  const board = Array(4).fill(null);

  for (var i = 0; i < board.length; i++) {
    board[i] = Array(4).fill(null);
  }

  return board;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      history: [
        {
          gameStarted: true,
          board: generateBoard(),
          pieces: generatePieces(),
          pieceSelected: null,
          win: false,
        }
      ],
      stepNumber: 0,
      playerOne: 'Tom',
      playerTwo: 'Ali',
    };
  }

  boardSelection(i, j) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const board = current.board.slice();

    if(!current.pieceSelected){
      return;
    }

    if (board[j][i]) {
      return;
    }

    board[j][i] = current.pieceSelected;

    let win = false;

    if (checkWin(board)) {
      win = true;
    }

    this.setState({
      history: history.concat([
        {
          ...current,
          board: board,
          pieceSelected: null,
          win: win,
        }
      ]),
      stepNumber: history.length,
    });

  }

  pieceSelection(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const pieces = current.pieces.slice();

    if(current.pieceSelected){
      return;
    }

    const selectedPiece = pieces[i];
    pieces.splice(i, 1);

    this.setState({
      history: history.concat([
        {
          ...current,
          pieceSelected: selectedPiece,
          pieces: pieces,
        }
      ]),
      stepNumber: history.length,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    if (!current.gameStarted) {
      return (
        <div className='selectGameType'>
          <GameSelect text='Human vs Human'/>
          <GameSelect text='Human vs AI' />
        </div>
      );
    } else {
      return (
        <div className='gameArea'>
          <PieceSelect pieces={current.pieces} onClick={i => this.pieceSelection(i)}/>
          <PlayerMessage game={this.state} />
          <GameBoard board={current.board} onClick={(i, j) => this.boardSelection(i, j)}/>
          <SelectedPiece piece={current.pieceSelected} />
        </div>
      )
    }
  }
}

export default App;
