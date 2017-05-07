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
        AIPlacePiece();
        if (!game.playerWon) {
          AISelectPiece();
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

function AISelectPiece() {
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

function AIPlacePiece() {
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

canvas.addEventListener('click', playTurn, false);
