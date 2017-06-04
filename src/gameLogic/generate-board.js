export default function generateBoard() {
  var board = [];

  for (var i = 0; i < 4; i++) {
    board.push([]);
    for (var j = 0; j < 4; j++) {
      board[i][j] = {
        piece: null,
        id: i+ j*4,
      };
    }
  }

  return board;
}
