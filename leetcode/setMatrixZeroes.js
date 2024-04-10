var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
        if(matrix[row][col] === 0){
            let sameCol = col
            let sameRow = row
            for(let setRow = 0; setRow < m; setRow++){
                if( matrix[setRow][sameCol] !== 0 && matrix[setRow][sameCol] !== 'A'){
                    matrix[setRow][sameCol] = 'A'
                }
            }
            for(let setCol = 0; setCol < n; setCol++){
                if( matrix[sameRow][setCol] !== 0 && matrix[sameRow][setCol] !== 'A'){
                    matrix[sameRow][setCol] = 'A'
                }
            }
        }
    }
  }
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
        if(matrix[row][col] === 'A'){
            matrix[row][col] = 0
        }
    }}
  console.table(matrix)
};

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(matrix)