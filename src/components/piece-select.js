import React, { Component } from 'react';
import Piece from './piece.js'

export default function PieceSelect({pieces, onClick}) {
  return (
    <div className='selectme'>
      {pieces.map((piece, index) =>
        <div className='pieceContainer' key={piece.num} onClick={() => onClick(index)}>
          <Piece piece={piece} />
        </div>
      )}
    </div>
  );
}
