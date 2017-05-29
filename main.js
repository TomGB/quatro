var game = {
  gameStarted: false,
  board: [],
  turn: 0,
  playerOne: "Human",
  playerTwo: "Bot",
  pieceSelected: null,
  playerWon: false,
  allPieces: [],
  useAI: true,
}

game.board = createBoard();

game.allPieces = generatePieces();

// draw(game);

displayMenu(game);

function userClick(e) {
  if(game.gameStarted){
    if(game.playerWon) {
      window.location = window.location.href
    } else {
      var x = e.x - canvas.offsetLeft;
      var y = e.y - canvas.offsetTop;
      if(game.pieceSelected == null) {
        try_select_piece(x, y, game);
      } else {
        on_empty_space_clicked(x, y, game);
      }
    }
  } else {

  }
}

canvas.addEventListener('click', userClick, false);
