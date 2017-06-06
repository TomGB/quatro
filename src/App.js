import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameSelect from './components/game-select'
import PieceSelect from './components/piece-select'
import Piece from './components/piece'
import generatePieces from './gameLogic/generate-pieces'
import checkWin from './gameLogic/check-win'

function TurnMessage({text}) {
  return (<h2>{text}</h2>);
}

function SelectedPiece({piece}) {
  return (
    <div className='selectedPiece'>
      Selected Piece:
      {piece?
        <Piece piece={piece} />
      : null}
    </div>
  )
}

function GameBoard({board, onClick}) {
  return (
    <div className='board'>
      {
        board.map((row, rowIndex) =>
          <div className='row' key={rowIndex}>
            {
              row.map((space, index) =>
                <div className='space' key={index} onClick={() => onClick(index, rowIndex)}>
                  {space?
                    <Piece piece={space}/>
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
        }
      ],
      stepNumber: 0,
      playerOne: 'Tom',
      playerTwo: 'Ali',
    };
  }

  boardSelection(i, j) {
    console.log('board selected at:');
    console.log(i, j);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const board = current.board.slice();

    if(!current.pieceSelected){
      console.log('no piece to place');
      return;
    }

    if (board[j][i]) {
      console.log('board already has a piece there');
      return;
    }

    board[j][i] = current.pieceSelected;

    if (checkWin(board)) {
      console.log('won');
    }

    this.setState({
      history: history.concat([
        {
          ...current,
          board: board,
          pieceSelected: null,
        }
      ]),
      stepNumber: history.length,
    });

  }

  pieceSelection(i) {
    console.log('pieceSelected:', i);
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const pieces = current.pieces.slice();

    if(current.pieceSelected){
      console.log('piece is already selected');
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

    console.log(this.state.history)

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
          <TurnMessage text={current.pieceSelected?'Place the piece':'Select a piece for ' + (this.state.stepNumber%2?this.state.playerOne:this.state.playerTwo)+' to place.'} />
          <GameBoard board={current.board} onClick={(i, j) => this.boardSelection(i, j)}/>
          <SelectedPiece piece={current.pieceSelected} />
        </div>
      )
    }
  }
}

export default App;
