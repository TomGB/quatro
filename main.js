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

// draw(game);

const buttonArray = [];

buttonArray.push(
  new Button({
    x: 50,
    y: 50,
    text: 'Human vs Human Game',
    onClick: () => {
      console.log('hi Human');
    },
  })
);

console.log(buttonArray);

buttonArray.push(
  new Button({
    x: 50,
    y: 130,
    text: 'Human vs AI Game',
    onClick: () => {
      console.log('hi AI');
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
    checkButtonClick(x, y, buttonArray);
  }
}

canvas.addEventListener('click', userClick, false);
