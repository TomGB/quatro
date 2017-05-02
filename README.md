# quatro

describe the 16 pieces
  4 variables of either true or false - could be in an array
  could also be 8 variables with either true or false.
    This would allow special pieces that can do both.

board made up of a 4 by 4 relational array
  array list of pieces yet to be placed

player states:
  turn
  piece selected
  player won

game logic:
  check if column row or diagonal has 4 booleans in the array set to to same (true or false)
  if no win
    player selects piece for opponent to place
    opponent places piece on empty part of board
