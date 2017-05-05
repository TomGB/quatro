function draw(game) {

  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');

  c.clearRect(0, 0, canvas.width, canvas.height);

  game.allPieces.forEach(piece => {
    drawPiece(c, piece, 20 + 40 * piece.num, 20, 20);
  });

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      c.strokeStyle = 'black';
      c.lineWidth = 1;
      c.strokeRect(100 + i*100, 100 + j*100, 100, 100)
    }
  }

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if(game.board[i][j] != null){
        drawPiece(c, game.board[i][j], 110 + i * 100, 110 + j * 100, 80);
      }
    }
  }

  if(game.pieceSelected != null) {
    drawPiece(c, game.pieceSelected, 560, 160, 80);
  }

  c.fillStyle = "black";
  c.font = "30px Arial";

  var turnText = (game.turn%2?game.playerTwo:game.playerOne)+'\'s turn, '+
  (game.pieceSelected?'place the piece':'select a piece for ' + (game.turn%2?game.playerOne:game.playerTwo)+' to place.');
  c.fillText(turnText, 110, 80);

  if (game.playerWon) {
    var winText = (game.turn%2?game.playerTwo:game.playerOne)+' has won!';

    c.fillStyle = "rgba(255,255,255,0.8)";
    c.fillRect(150,150,360,100);

    c.fillStyle = "black";
    c.font = "50px Arial";
    c.fillText(winText, 190, 220);
  }
}

function drawPiece(c, piece, x, y, size) {
  c.lineWidth = size / 5;
  var halfSize = size / 2;

  drawQuater(c, piece.tl, x, y, halfSize);
  drawQuater(c, piece.tr, x + halfSize, y, halfSize);
  drawQuater(c, piece.bl, x, y + halfSize, halfSize);
  drawQuater(c, piece.br, x + halfSize, y + halfSize, halfSize);

  c.strokeRect(x, y, size, size);
}

function drawQuater(c, attr, x, y, size) {
  c.fillStyle = attr ? 'white' : 'black';
  c.fillRect(x, y, size, size);
}
