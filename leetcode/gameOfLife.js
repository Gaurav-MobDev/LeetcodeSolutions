var gameOfLife = function (board) {
  let boardCopy = JSON.parse(JSON.stringify([...board]));
  let m = board.length;
  let n = board[0].length;

  function countLiveCells(i,j){
    let live = 0
    if(i > 0 && boardCopy[i-1][j] === 1){
        live++
    }
    if(i >0 && j> 0 && boardCopy[i-1][j-1] === 1){
        live++
    }
    if(i > 0 &&  j<n-1 && boardCopy[i-1][j+1] === 1){
        console.log(`[i-1][j+1]----${i}${j}`)
        live++
    }
    if(i < m-1 && boardCopy[i+1][j] === 1){
        console.log(`[i+1][j]----${i}${j}`)
        live++
    }
    if(i < m-1 && j >0 && boardCopy[i+1][j-1] === 1){
        live++
    }
    if( i<m-1 && j< n-1 && boardCopy[i+1][j+1] === 1){
        console.log(`[i+1][j+1]----${i}${j}`)
        live++
    }
    if(j < n-1 && boardCopy[i][j+1] === 1){
        live++
    }
    if(j > 0 && boardCopy[i][j-1] === 1){
        live++
    }
    return live
  }

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
        if(boardCopy[row][col] === 1){
            let live = countLiveCells(row, col)
            console.log(`1- ${row}${col}-`,live)
            if(live < 2){
                board[row][col] = 0
            }
            if(live === 2 || live === 3){
                board[row][col] = 1
            }
            if(live > 3){
                board[row][col] = 0
            }
        }else if(boardCopy[row][col] === 0){
            let live = countLiveCells(row, col)
            console.log(`0- ${row}${col}-`,live)
            if(live === 3){
                board[row][col] = 1
            }
        }
    }
  }
  console.table(board)
};

let board =  [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
gameOfLife(board)