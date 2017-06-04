import React, { Component } from 'react';

export default function PieceSelect({pieces}) {
  return (
    <div className='selectme'>
      {pieces.map(piece =>
        (<div className='piece'>
          <div className={(piece.tl?'black':'white')+' pieceQuater'}></div>
          <div className={(piece.tr?'black':'white')+' pieceQuater'}></div>
          <div className={(piece.bl?'black':'white')+' pieceQuater'}></div>
          <div className={(piece.br?'black':'white')+' pieceQuater'}></div>
        </div>)
      )}
    </div>
  );
}
