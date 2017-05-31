function draw(game) {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');

  console.log(canvas.offsetWidth, canvas.offsetHeight);

  c.canvas.width  = canvas.offsetWidth;
  c.canvas.height = canvas.offsetHeight;

  buttonArray.forEach((button) => {
    var newWidth = canvas.width / 20;
    button.setFontSize(newWidth);
  });

  c.clearRect(0, 0, canvas.width, canvas.height);

  if (game.gameStarted) {

      for (var i = 0; i < game.allPieces.length; i++) {
        drawPiece(c, game.allPieces[i], 20 + 40 * i, 20, 20);
      }

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
      c.fillText(turnText, 40, 80);

      if (game.playerWon) {
        drawPlayerWon(c, game);
      }
  } else {
    displayMenu(game);
  }
}

function drawPlayerWon(c, game) {
  var winText = (game.turn%2?game.playerTwo:game.playerOne)+' has won!';

  c.fillStyle = "rgba(255,255,255,0.8)";
  c.fillRect(150,150,360,100);

  c.fillStyle = "black";
  c.font = "50px Arial";
  c.fillText(winText, 190, 220);
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

function drawButton(c, button) {
  c.font = button.font;
  c.strokeRect(button.x, button.y, button.width, button.height);
  c.fillText(button.text, button.x + button.margin, button.y + button.fontSize * 0.8 + button.margin);
}

function displayMenu(game) {
  var canvas = document.getElementById('canvas');
  var c = canvas.getContext('2d');

  buttonArray.forEach((button) => {
    drawButton(c, button);
  });
}
