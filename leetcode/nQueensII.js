var totalNQueens = function (n) {
  let totalSolutions = 0;
  function dp(i, j, prevQueens, prevQueensIndex) {
    if (i > n || j > n) {
      return;
    }
    for (let row = prevQueensIndex; row < prevQueens.length; row++) {
        if (
          i === prevQueens[row][0] ||
          j == prevQueens[row][1] ||
          (i + 1 == prevQueens[row][0] && j + 1 == prevQueens[row][1]) ||
          (i - 1 == prevQueens[row][0] && j - 1 == prevQueens[row][1]) ||
          (i - 1 == prevQueens[row][0] && j + 1 == prevQueens[row][1]) ||
          i + 1 == prevQueens[row][0] ||
          j - 1 == prevQueens[row][1]
        ) {
          j = j + 1;
          dp(i, j, prevQueens, prevQueensIndex);
        } else {
          prevQueens.push([i, j]);
          if(i===n){
            j=j+1
          }
          if (i === n-1 && j === n-1) {
            totalSolutions++;
            return
          }
          dp(i + 1, j, prevQueens, prevQueensIndex);
        }
    }
  }
  for (let j = 0; j < n; j++) {
    console.log(j)

    dp(1, j, [[0, j]], 0);
  }
  console.log(totalSolutions);
};

let n = 4;
totalNQueens(n);
