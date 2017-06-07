import React, { Component } from 'react';
import Piece from './piece'

export default function GameBoard({board, onClick}) {

  function getRowContents(row, rowIndex) {
    return row.map((space, index) =>
      <div className='space' key={index} onClick={() => onClick(index, rowIndex)}>
        {space?
          <Piece piece={space}/>
        : null}
      </div>
    );
  }

  var rows = board.map((row, rowIndex) =>
    <div className='row' key={rowIndex}>
      {getRowContents(row, rowIndex)}
    </div>
  );

  return (
    <div className='board'>
      {rows}
    </div>
  )
}
