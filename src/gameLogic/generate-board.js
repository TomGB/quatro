export default function generateBoard() {
  var board = [];

  for (var i = 0; i < 4; i++) {
    board.push([]);
    for (var j = 0; j < 4; j++) {
      board[i][j] = {
        tl:1,
        tr:1,
        bl:0,
        br:1,
      };
    }
  }

  return board;
}
