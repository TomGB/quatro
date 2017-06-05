import React, { Component } from 'react';
import Piece from './piece.js'

export default function PieceSelect({pieces}) {
  return (
    <div className='selectme'>
      {pieces.map(piece =>
        <Piece piece={piece} key={piece.num} />
      )}
    </div>
  );
}
