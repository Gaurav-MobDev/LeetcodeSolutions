function exist(board, word) {
    function dfs(board, word, i, j, k) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[k]) {
            return false;
        }
        if (k === word.length - 1) {
            return true;
        }
        const tmp = board[i][j];
        board[i][j] = '/';
        const res = dfs(board, word, i + 1, j, k + 1) ||
                    dfs(board, word, i - 1, j, k + 1) ||
                    dfs(board, word, i, j + 1, k + 1) ||
                    dfs(board, word, i, j - 1, k + 1);
        board[i][j] = tmp;
        return res;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, word, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}

// Example usage:
const board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
];
let word = "ABCCED";
console.log(exist(board, word));  // Output: true

word = "SEE";
console.log(exist(board, word));  // Output: true

word = "ABCB";
console.log(exist(board, word));  // Output: false
