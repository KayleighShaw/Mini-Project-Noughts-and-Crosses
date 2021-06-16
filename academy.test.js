/* eslint-disable no-undef */
const academyModule = require("./academy");
const each = require("jest-each").default;

describe("When we call the rowWin function", () => {
  //Arrange
  let board = ["Not ready"];

  beforeEach(() => {
    board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    console.log("Board was reset");
  });

  afterEach(() => {
    board = ["All done now"];
  });

  test("correctly indicates no row win when the row is not full", () => {
    // Arrange
    let board = [
      [null, null, null],
      ["cross", null, null],
      [null, null, null],
      [null, null, null],
    ];

    const expectedOutput = null;

    // Act
    const actualOutput = academyModule.rowWin(board);

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput);
  });

  test("We can place a second piece in a populated column", () => {
    // Arrange
    let board = [
      [null, null, null],
      ["cross", "nought", null],
      [null, null, null],
      [null, null, null],
    ];

    const expectedOutput = null;

    // Act
    const actualOutput = academyModule.rowWin(board);

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput);
  });

  test("We can achieve a win in a full column", () => {
    // Arrange
    let board = [
      [null, null, null],
      ["cross", "cross", "cross"],
      [null, null, null],
      [null, null, null],
    ];

    const expectedOutput = "cross";

    // Act
    const actualOutput = academyModule.rowWin(board);

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe("When we call the diagonalWin function", () => {
  //Arrange
  let board = ["Not ready"];

  beforeEach(() => {
    board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    console.log("Board was reset");
  });

  afterEach(() => {
    board = ["All done now"];
  });

  test("We can place a first piece in an empty column", () => {
    // Arrange
    let board = [
      [null, null, null],
      ["cross", null, null],
      [null, null, null],
      [null, null, null],
    ];

    const expectedOutput = null;

    // Act
    const actualOutput = academyModule.rowWin(board);

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput);
  });

  test("We can place a second piece in a populated column", () => {
    // Arrange
    let board = [
      [null, null, null],
      ["cross", "nought", null],
      [null, null, null],
      [null, null, null],
    ];

    const expectedOutput = null;

    // Act
    const actualOutput = academyModule.rowWin(board);

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput);
  });

  test("We can achieve a win in a left-right diagonal", () => {
    // Arrange
    let board = [
      ["cross", null, null],
      [null, "cross", null],
      [null, null, "cross"],
      [null, "nought", null],
    ];

    const expectedOutput = "cross";

    // Act
    const actualOutput = academyModule.diagonalWin(board);

    // Assert
    expect(actualOutput).toStrictEqual(expectedOutput);
  });
});

describe ("when calling the calling the takeTurn function", () => {
  test ("will not update the player if the cell is occupied", () => {
    //Arrange
    const player = "cross"
    academyModule.playTurn = player
    const initialBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ]
    //Act
    academyModule.takeTurn(1, 1, initialBoard)
    //Assert
    expect(academyModule.playTurn).toEqual(player)
    const expectedBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ]
    expect(initialBoard).toStrictEqual(expectedBoard)
  })

  test ("will update the player to cross on an empty cell", () => {
    //Arrange
    const player1 = "cross"
    const player2 = "nought"
    academyModule.setPlayerTurn(player1)
    const initialBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ]
    //Act
    academyModule.takeTurn(1, 0, initialBoard)
    //Assert
    expect(academyModule.getPlayerTurn()).toEqual(player2)
    const expectedBoard = [
      [null, null, null],
      ["cross", "bob", null],
      [null, null, null],
    ]
    expect(initialBoard).toStrictEqual(expectedBoard)
  })

  test ("will update the player to nought on an empty cell", () => {
    //Arrange
    const player1 = "cross"
    const player2 = "nought"
    academyModule.setPlayerTurn(player1)
    const initialBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ]
    //Act
    academyModule.takeTurn(1, 0, initialBoard)
    //Assert
    expect(academyModule.getPlayerTurn()).toEqual(player2)
    const expectedBoard = [
      [null, null, null],
      ["cross", "bob", null],
      [null, null, null],
    ]
    expect(initialBoard).toStrictEqual(expectedBoard)
  })

  test ("will do nothing if the column is invalid", () => {
    //Arrange
    const player1 = "cross"
    academyModule.setPlayerTurn(player1)
    const initialBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ]
    //Act
    academyModule.takeTurn(1, 10, initialBoard)
    //Assert
    expect(academyModule.getPlayerTurn()).toEqual(player1)
    const expectedBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ]
    expect(initialBoard).toStrictEqual(expectedBoard)
  })

  test ("will throw an error if the row is invalid", () => {
    //Arrange
    const player1 = "cross"
    academyModule.setPlayerTurn(player1)
    const initialBoard = [
      [null, null, null],
      [null, "bob", null],
      [null, null, null],
    ]
    try {
      //Act
      academyModule.takeTurn(10, 1, initialBoard)
      fail("Expected a TypeError but didn't get one!")
    } catch(err) {
      //Assert
      // Error is:  TypeError: Cannot read property '1' of undefined
      expect(err.message).toEqual("Cannot read property '1' of undefined")
      expect(err.name).toEqual("TypeError")
      expect(academyModule.getPlayerTurn()).toEqual(player1)
      const expectedBoard = [
        [null, null, null],
        [null, "bob", null],
        [null, null, null],
      ]
      expect(initialBoard).toStrictEqual(expectedBoard)
    }
  })

  test ("will throw an error if the board is invalid", () => {
    //Arrange
    const player1 = "cross"
    academyModule.setPlayerTurn(player1)
    const initialBoard = []
    try {
      //Act
      academyModule.takeTurn(2, 3, initialBoard)
      fail("Expected a TypeError but didn't get one!")
    } catch(err) {
      //Assert
      expect(err.message).toEqual("Cannot read property '3' of undefined")
      expect(err.name).toEqual("TypeError")
      expect(academyModule.getPlayerTurn()).toEqual(player1)
      const expectedBoard = []
      expect(initialBoard).toStrictEqual(expectedBoard)
    }
  })
})
