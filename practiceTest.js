// function transposeBoard(board) {
//   let initialBoard = board;
//   for (let rowIndex = 0; rowIndex < initialBoard.length; rowIndex++) {
//     for (let columnIndex = 0; columnIndex < rowIndex; columnIndex++) {
//       const transposeBoard = initialBoard[rowIndex][columnIndex];
//       initialBoard[rowIndex][columnIndex] = initialBoard[columnIndex][rowIndex];
//       initialBoard[columnIndex][rowIndex] = transposeBoard;
//       return transposeBoard;
//     }
//   }
// }

// console.log(transposeBoard(savedGameStateBoard));

// function transpose(board) {
//   let newBoard = savedGameStateBoard;
//   return newBoard.reduce(
//     (prev, next) => next.map((element, i) => (prev[i] || []).concat(next[i])),
//     []
//   );
// }

// function columnWin(board) {
//   let flippedBoard = transpose(savedGameStateBoard);
//   const whoWins = flippedBoard.find((row) => {
//     if (row[0] === row[1] && row[1] === row[2] && row[0] !== null) {
//       return true;
//     }
//   });
//   return whoWins === undefined ? null : whoWins[0];
// }

// function transposeBoard(board) {
//   let initialBoard = board;
//   for (let rowIndex = 0; rowIndex < initialBoard.length; rowIndex++) {
//     for (let columnIndex = 0; columnIndex < rowIndex; columnIndex++) {
//       const transposeBoard = initialBoard[rowIndex][columnIndex];
//       initialBoard[rowIndex][columnIndex] = initialBoard[columnIndex][rowIndex];
//       initialBoard[columnIndex][rowIndex] = transposeBoard;
//       console.log(transposeBoard);
//     }
//   }
// }

let savedGameStateBoard = [
  [null, "cross", null],
  [null, "cross", null],
  [null, "cross", null],
];

let savedGameStateBoard2 = [
  ["cross", "cross", null],
  [null, null, null],
  [null, null, null],
];

function aWinner(board) {
  let rowResults = [0, 1, 2].map((rowIndex) => {
    if (
      board[rowIndex][0] == board[rowIndex][1] &&
      board[rowIndex][1] == board[rowIndex][2] &&
      board[rowIndex][0] !== null
    ) {
      return board[rowIndex][0];
    }
  });
  // console.log(rowResults);

  let colResults = [0, 1, 2].map((colIndex) => {
    if (
      board[0][colIndex] == board[1][colIndex] &&
      board[1][colIndex] == board[2][colIndex] &&
      board[0][colIndex] !== null
    ) {
      return board[0][colIndex];
    }
  });
  // console.log(colResults);

  if (rowResults[0] != undefined) {
    return rowResults[0];
  } else if (colResults[0] != undefined) {
    return colResults[0];
  } else {
    return "nobody"
  }
}



console.log(aWinner(savedGameStateBoard));
console.log(aWinner(savedGameStateBoard2));

// console.log(columnWin(savedGameStateBoard));
// console.log(transpose(savedGameStateBoard));

// return savedBoard[0].map((_, colIndex) =>
//   savedBoard.map((row) => row[colIndex])
// );

// console.log(columnWin(savedGameStateBoard));
