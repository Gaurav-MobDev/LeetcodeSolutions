var rotate = function (matrix) {
  let n = matrix.length - 1;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length - 1; col++) {
      let temp1 = matrix[col][n];
      let temp2 = matrix[n][n];
      let temp3 = matrix[n][col];
      matrix[col][n] = matrix[row][col];
      matrix[n][n] = temp1;
      matrix[n][col] = temp2;
      matrix[row][col] = temp3;
    }
    n--;
  }
  console.log(JSON.stringify(matrix));
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix);
