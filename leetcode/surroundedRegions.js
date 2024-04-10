var solve = function (board) {
  console.table(board);

  let m = board.length;
  let n = board[0].length;
  function dfs(board, i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i >= board.length ||
      j >= board[0].length ||
      board[i][j] == "X" ||
      board[i][j] == "W"
    ) {
      return;
    }
    board[i][j] = "W";
    dfs(board, i + 1, j);
    dfs(board, i - 1, j);
    dfs(board, i, j + 1);
    dfs(board, i, j - 1);
    return;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if(board[i][j] == 'O' && (i==0 || i==board.length-1 || j==0 || j==board[0].length-1)){
            dfs(board,i,j)
         }
    }
  }
  console.table(board);
  for(var i=0;i<board.length;i++){
    for(var j=0;j<board[0].length;j++){
        if(board[i][j]=='W'){
              board[i][j]='O'
           }
        else {
                board[i][j]='X'
                }
    }
}
  console.table(board);
};

let board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
solve(board);
