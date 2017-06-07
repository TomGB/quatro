import React, { Component } from 'react';

function generateText(game) {
  const history = game.history.slice(0, game.stepNumber + 1);
  const current = history[history.length - 1];
  const turn = Math.floor(game.stepNumber / 2);

  let currentPlayer;
  let otherPlayer;

  if (turn % 2){
    currentPlayer = game.playerOne;
    otherPlayer = game.playerTwo;
  } else {
    currentPlayer = game.playerTwo;
    otherPlayer = game.playerOne;
  }

  if (current.win) {
    return `${otherPlayer} has won`;
  } else {
    if (current.pieceSelected) {
      return `${currentPlayer} place the piece`;
    } else {
      return `${currentPlayer} select a piece for ${otherPlayer} to play`;
    }
  }
}

export default function PlayerMessage({game}) {
  return (<h2 className='messageToPlayer'>{generateText(game)}</h2>);
}
