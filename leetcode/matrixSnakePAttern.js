function snakePAttern(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let size = m * n;
  let index = 0;
  let i = 0;
  let j = 0;
  let changeDirection = true;
  while (index < size) {
    if(i>=0 && i < m && j>=0 && j<n){
        console.log(matrix[i][j]);
    }
    if (j === n) {
      changeDirection = false;
    }
    if (j === 0) {
      changeDirection = true;
    }
    if (changeDirection) {
      j++;
    } else {
      j--;
    }
    if (j === n+1 || j === 0) {
      i++;
    }
    index++;
  }
  
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

snakePAttern(matrix)
