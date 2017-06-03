var game = {
  board: [],
  turn: 0,
  playerOne: "Rob",
  playerTwo: "AI",
  pieceSelected: null,
  playerWon: false,
  allPieces: [],
  useAI: true,
}

game.board = createBoard();
game.allPieces = generatePieces();
draw(game);

function resetGame() {
  window.location = window.location.href
}

function tryToSelectPiece(x, y, game) {
  gamePieceSelected(x, y, game.allPieces, (i) => {
    game.pieceSelected = game.allPieces[i];
    console.log('selected piece:', game.allPieces[i].num);
    game.allPieces.splice(i, 1);
    game.turn ++;
    draw(game);

    if (game.turn % 2 && game.useAI) {
      AIPlacePiece(game);
      if (!game.playerWon) {
        AISelectPiece(game);
      }
    }
  });
}

function playTurn(e) {
  if(game.playerWon) {
    resetGame();
  } else {
    var x = e.x - canvas.offsetLeft;
    var y = e.y - canvas.offsetTop;
    if(game.pieceSelected == null) {
      tryToSelectPiece(x, y, game);
    } else {
      emptySpaceSelected(x, y, game, (i, j) => {
        game.board[i][j] = game.pieceSelected;
        console.log(game.board);
        game.pieceSelected = null;

        game.playerWon = checkWin(game.board);

        draw(game);
      });
    }
  }
}

canvas.addEventListener('click', playTurn, false);
