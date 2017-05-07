function AISelectPiece(game) {
  console.log('AI select piece');
  var tempBoard = JSON.parse(JSON.stringify(game.board));

  for (var p = 0; p < game.allPieces.length; p++) {
    var win = 0;
    for (var i = 0; i < tempBoard.length; i++) {
      for (var j = 0; j < tempBoard[i].length; j++) {
        if (tempBoard[i][j] == null) {
          tempBoard[i][j] = game.allPieces[p];
          win += checkWin(tempBoard);
        }
        tempBoard = JSON.parse(JSON.stringify(game.board));
      }
    }

    if (win == 0) {
      game.pieceSelected = game.allPieces[p];
      console.log('selected piece:', game.allPieces[p].num);
      game.turn ++;
      game.allPieces.splice(p, 1);
      draw(game);
      return;
    }
  }

  var pieceNum = Math.floor(Math.random() * game.allPieces.length);

  console.log('randomly selecting piece num:', pieceNum);

  game.pieceSelected = game.allPieces[pieceNum];
  console.log('selected piece:', game.allPieces[pieceNum].num);
  game.turn ++;
  game.allPieces.splice(pieceNum, 1);
  draw(game);
  return;
}

function AIPlacePiece(game) {
  console.log('ai plece piece');
  var tempBoard = JSON.parse(JSON.stringify(game.board));
  for (var i = 0; i < tempBoard.length; i++) {
    for (var j = 0; j < tempBoard[i].length; j++) {
      if (tempBoard[i][j] == null) {
        tempBoard[i][j] = game.pieceSelected;
        if (checkWin(tempBoard)) {
          game.board[i][j] = game.pieceSelected;
          console.log(game.board);
          game.pieceSelected = null;
          game.playerWon = checkWin(game.board);
          draw(game);
          return;
        }
      }
      tempBoard = JSON.parse(JSON.stringify(game.board));
    }
  }

  while (true) {
    var x = Math.floor(Math.random() * 4);
    var y = Math.floor(Math.random() * 4);
    console.log('random:', x, y);
    if (tempBoard[x][y] == null) {
      game.board[x][y] = game.pieceSelected;
      console.log(game.board);
      game.pieceSelected = null;
      draw(game);
      return;
    }
  }
}
