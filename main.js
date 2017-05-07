 function generatePieces() {
  var piecesArray = [];

  for (var i = 0; i < 16; i++) {
    var num = ("000" + i.toString(2)).substr(-4);

    piecesArray.push({
      tl: parseInt(num.charAt(0)),
      tr: parseInt(num.charAt(1)),
      bl: parseInt(num.charAt(2)),
      br: parseInt(num.charAt(3)),
      num: i
    });
  }

  return piecesArray;
}

function createBoard() {
  var board = [];

  for (var i = 0; i < 4; i++) {
    board.push([]);
    for (var j = 0; j < 4; j++) {
      board[i][j] = null;
    }
  }

  return board;
}

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

function playTurn(e) {
  if(game.playerWon) {
    window.location = window.location.href
  } else {
    var x = e.x - canvas.offsetLeft;
    var y = e.y - canvas.offsetTop;
    if(game.pieceSelected == null) {
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
    } else {
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
  }
}

canvas.addEventListener('click', playTurn, false);
