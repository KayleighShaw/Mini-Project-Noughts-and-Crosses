let savedBoard = [
  ["cross", null, null],
  [null, "cross", null],
  [null, null, "cross"],
];

let savedBoard2 = [
  [null, null, null],
  [null, "cross", null],
  [null, null, "cross"],
];

let savedBoard3 = [
  [null, null, "nought"],
  [null, "nought", null],
  ["nought", null, null],
];

function diagonalWin(board) {
  const whoWins = board[1][1]; // const whoWins = board.find((diagonal) =>
  if (
    (board[0][0] === board[1][1] &&
      board[1][1] === board[2][2] &&
      board[0][0] !== null) ||
    (board[0][2] === board[1][1] &&
      board[1][1] === board[2][0] &&
      board[0][2] !== null)
  ) {
    return whoWins === undefined ? null : board[1][1];
  } else {
    return null;
  }
}

console.log(diagonalWin(savedBoard));
console.log(diagonalWin(savedBoard2));
console.log(diagonalWin(savedBoard3));
