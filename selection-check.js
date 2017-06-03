function emptySpaceSelected(x, y, game, callback) {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (
        game.board[i][j] == null &&
        x > 100 + i * 100 &&
        x < 100 + i * 100 + 100 &&
        y > 100 + j * 100 &&
        y < 100 + j * 100 + 100
      ) {
        callback(i, j);
      }
    }
  }
}

function gamePieceSelected(x, y, allPieces, callback) {
  for (var i = 0; i < allPieces.length; i++) {
    if (
      x > 20 + 40 * i &&
      x < 20 + 40 * i + 20 &&
      y > 20 &&
      y < 40
    ) {
      callback(i);
    }
  }
}
