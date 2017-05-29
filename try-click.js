function onEmptySpaceClicked(x, y, game) {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (
        game.board[i][j] == null &&
        x > 100 + i * 100 &&
        x < 100 + i * 100 + 100 &&
        y > 100 + j * 100 &&
        y < 100 + j * 100 + 100
      ) {
        game.board[i][j] = game.pieceSelected;
        console.log(game.board);
        game.pieceSelected = null;

        game.playerWon = checkWin(game.board);

        draw(game);
      }
    }
  }
}

function trySelectPiece(x, y, game) {
  var index = -1;
  for (var i = 0; i < game.allPieces.length; i++) {
    if (
      x > 20 + 40 * i &&
      x < 20 + 40 * i + 20 &&
      y > 20 &&
      y < 40
    ) {
      game.pieceSelected = game.allPieces[i];
      console.log('selected piece:', game.allPieces[i].num);
      game.turn ++;
      index = i;
    }
  }

  if (index != -1) {
    game.allPieces.splice(index, 1);
  }

  draw(game);

  if (game.turn % 2 && game.useAI) {
    AIPlacePiece(game);
    if (!game.playerWon) {
      AISelectPiece(game);
    }
  }
}

function checkButtonClick(x, y, buttonArray) {
  buttonArray.forEach((button) => {
    if(x > button.x && x < button.x + button.width && y > button.y && y < button.y + button.height){
      console.log('inside button');
      button.onClick();
    }
  });
}
