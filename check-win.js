function checkWin(game) {
  var won = 0;
  for (var i = 0; i < 4; i++) {
    won += checkFour([game.board[i][0], game.board[i][1], game.board[i][2], game.board[i][3]]);
    won += checkFour([game.board[0][i], game.board[1][i], game.board[2][i], game.board[3][i]]);
  }

  won += checkFour([game.board[0][0], game.board[1][1], game.board[2][2], game.board[3][3]]);
  won += checkFour([game.board[0][3], game.board[1][2], game.board[2][1], game.board[3][0]]);

  return won;
}

function checkFour(fourPieces) {
  var allThere = true;

  fourPieces.forEach((piece) => {
    if(piece == null){
      allThere = false;
    }
  });

  if(!allThere){
    return false;
  }

  console.log(fourPieces);

  var attr = ['tl', 'tr', 'bl', 'br'];

  for (var i = 0; i < attr.length; i++) {
    var allFalse = true;
    var allTrue = true;

    fourPieces.forEach((piece) => {
      if (piece[attr[i]]) {
        console.log('on');
        allFalse = false;
      } else {
        allTrue = false;
        console.log('off');
      }
    });

    if (allTrue || allFalse) {
      return true;
    }
  }

  return false;
}
