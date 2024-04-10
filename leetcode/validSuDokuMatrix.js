var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    let colMap = {};
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") {
        continue;
      }
      console.log("first loop", i, j, colMap[board[i][j]]);
      if (!colMap[board[i][j]]) {
        colMap[board[i][j]] = true;
      } else {
        return false;
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    let colMap = {};
    for (let j = 0; j < board[i].length; j++) {
      if (board[j][i] === ".") {
        continue;
      }
      console.log("second loop", i, j);
      if (!colMap[board[j][i]]) {
        colMap[board[j][i]] = true;
      } else {
        return false;
      }
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let colMap = {};
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          console.log("third loop", i, j, k, l);
          if (board[k][l] === ".") {
            continue;
          }
          if (!colMap[board[k][l]]) {
            colMap[board[k][l]] = true;
          } else {
            return false;
          }
        }
      }
    }
  }
  return true;
};

let board = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

console.log(isValidSudoku(board));
