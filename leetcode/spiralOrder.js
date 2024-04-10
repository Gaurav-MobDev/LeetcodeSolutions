var spiralOrder = function (matrix) {
  console.table(matrix);
  let m = matrix.length;
  let n = matrix[0].length;
  let index = 0;
  let right = n - 1;
  let bottom = m - 1;
  let row = 0;
  let col = 0;
  let top = 0;
  let left = 0;
  let indexLimit = m*n
  let result = []
  while (index < indexLimit) {
    while (col <= right  && index < indexLimit) {
      console.log(`${row}-${col}`, "-", matrix[row][col]);
      result.push(matrix[row][col])
      col++;
      index++;
    }
    col--;
   row++
    while (row <= bottom  && index < indexLimit) {
        result.push(matrix[row][col])
      console.log(`${row}-${col}`, "-", matrix[row][col]);
      row++;
      index++;
    }
    row--;
    col--
    while (col > left  && index < indexLimit) {
        result.push(matrix[row][col])
      console.log(`${row}-${col}`, "-", matrix[row][col]);
      col--;
      index++;
    }
    while (row > top && index < indexLimit) {
        result.push(matrix[row][col])
      console.log(`${row}-${col}`, "-", matrix[row][col]);
      row--;
      index++;
    }
    bottom--;
    right--;
    col++;
    top++;
    left++;
    row++;
  }
  return result
};

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12], [13,14,15,16]]
spiralOrder(matrix);
