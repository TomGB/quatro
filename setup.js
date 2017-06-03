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
