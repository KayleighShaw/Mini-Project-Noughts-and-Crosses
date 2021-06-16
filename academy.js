// Make your changes to store and update game state in this file

// Take the row and column number between 0 and 2
// (inclusive) and update the game state.

function setPlayerNames() {
  document
    .getElementById("set-players-button")
    .addEventListener("click", function () {
      let playerOne = prompt("Please enter the name of Player One: ");
      alert(`Hi ${playerOne}! You are ❌!`);
      document.getElementById("playerOne").innerHTML = `${playerOne}: ❌`;
      let playerTwo = prompt("Please enter the name of Player Two: ");
      alert(`Hi ${playerTwo}! You are ⭕!`);
      document.getElementById("playerTwo").innerHTML = `${playerTwo}: ⭕`;
      // let array = [playerOne, playerTwo]
    });
  // return playerArray; //this doesn't work but maybe soon. There is a plan.
}

let stateBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let playTurn = "cross"; //randomize between player 1 and 2

function takeTurn(row, column, board) {
  console.log("takeTurn was called with row: " + row + ", column:" + column);
  //   debugger;
  if (playTurn === "nought" && board[row][column] === null) {
    board[row][column] = "nought";
    playTurn = "cross";
  } else if (playTurn === "cross" && board[row][column] === null) {
    board[row][column] = "cross";
    playTurn = "nought";
  } else {
    console.log("I'm afraid I can't let you do that, Dave");
  }
}

// function rowColumnWinner(board) {
//   let rowResults = [0, 1, 2].map((rowIndex) => {
//     if (
//       board[rowIndex][0] == board[rowIndex][1] &&
//       board[rowIndex][1] == board[rowIndex][2] &&
//       board[rowIndex][0] !== null
//     ) {
//       return board[rowIndex][0];
//     }
//   });
//   console.log(rowResults);

//   let colResults = [0, 1, 2].map((colIndex) => {
//     if (
//       board[0][colIndex] == board[1][colIndex] &&
//       board[1][colIndex] == board[2][colIndex] &&
//       board[0][colIndex] !== null
//     ) {
//       return board[0][colIndex];
//     }
//   });
//   console.log(colResults);

//   if (rowResults[0] != undefined) {
//     return rowResults[0];
//   } else if (colResults[0] != undefined) {
//     return colResults[0];
//   } else {
//     return "nobody";
//   }
// }

function rowWin(board) {
  const whoWins = board.find((row) => {
    if (row[0] === row[1] && row[1] === row[2] && row[0] !== null) {
      return true;
    }
  });
  return whoWins === undefined ? null : whoWins[0];
}

function transpose(board) {
  //???
  let newBoard = board;
  return newBoard.reduce(
    (prev, next) => next.map((element, i) => (prev[i] || []).concat(next[i])),
    []
  );
}

function columnWin(board) {
  let flippedBoard = transpose(board);
  return rowWin(flippedBoard);
}

function diagonalWin(board) {
  const whoWins = board[1][1];
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

function isDraw(board) {
  let flattenBoard = board.flat();
  let isItADraw = flattenBoard.filter(
    (space) => space === "cross" || space === "nought"
  );
  return isItADraw.length;
}

function checkWinner() {
  console.log("checkWinner was called");
  let columnWinner = columnWin(stateBoard);
  let rowWinner = rowWin(stateBoard);
  let diagonalWinner = diagonalWin(stateBoard);
  let winner = columnWinner || rowWinner || diagonalWinner;

  switch (winner) {
    case "cross":
      // gameEnd = true;
      return "crosses";
    case "nought":
      return "noughts";
    case null:
      if (isDraw(stateBoard) === 9) {
        return "nobody";
      }
      break;
    default:
      return null;
  }
}

// Set the game state back to its original state to play another game.
function resetGame() {
  console.log("resetGame was called");
  return (stateBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
  console.log("getBoard was called");
  return stateBoard;
}

function getPlayerTurn() {
  return playTurn;
}

function setPlayerTurn(newPlayer) {
  playTurn = newPlayer;
}

if (typeof exports === "object") {
  console.log("Running in Node");
  // Node. Does not work with strict CommonJS, but only CommonJS-like
  // environments that support module.exports, like Node.
  module.exports = {
    takeTurn,
    checkWinner,
    resetGame,
    getBoard,
    rowWin,
    diagonalWin,
    getPlayerTurn,
    setPlayerTurn,
  };
} else {
  console.log("Running in Browser");
}
