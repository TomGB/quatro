const game = {
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

const buttonArray = [];

buttonArray.push(
  new Button({
    x: 50,
    y: 50,
    text: 'Human vs Human Game',
    onClick: (game) => {
      console.log('setting game to human v human');
      game.gameStarted = true;
      game.useAI = false;
      game.playerOne = 'Alpha'
      game.playerTwo = 'Beta'
      draw(game);
    },
  })
);

buttonArray.push(
  new Button({
    x: 50,
    y: 130,
    text: 'Human vs AI Game',
    onClick: (game) => {
      console.log('setting game to human v ai');
      game.gameStarted = true;
      game.useAI = true;
      draw(game);
    },
  })
);

displayMenu(game);

function userClick(e) {
  var x = e.x - canvas.offsetLeft;
  var y = e.y - canvas.offsetTop;
  if(game.gameStarted){
    if(game.playerWon) {
      window.location = window.location.href
    } else {
      if(game.pieceSelected == null) {
        trySelectPiece(x, y, game);
      } else {
        onEmptySpaceClicked(x, y, game);
      }
    }
  } else {
    checkButtonClick(x, y, buttonArray, game);
  }
}

canvas.addEventListener('click', userClick, false);
