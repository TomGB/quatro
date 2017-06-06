export default function checkWin(board) {
  var won = 0;
  for (var i = 0; i < 4; i++) {
    won += checkFour([board[i][0], board[i][1], board[i][2], board[i][3]]);
    won += checkFour([board[0][i], board[1][i], board[2][i], board[3][i]]);
  }

  won += checkFour([board[0][0], board[1][1], board[2][2], board[3][3]]);
  won += checkFour([board[0][3], board[1][2], board[2][1], board[3][0]]);

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
        allFalse = false;
      } else {
        allTrue = false;
      }
    });

    if (allTrue || allFalse) {
      return true;
    }
  }

  return false;
}
