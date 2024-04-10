var findWords = function (board, words) {
  let output = [];
  let wordDict = {};
  for (let word of words) {
    wordDict[word] = 1;
  }
  const visited = Array.from({ length: board.length }, () =>
    Array(board[0].length).fill(false)
  );

  function dp(i, j, word) {
    if (
      i < 0 ||
      j < 0 ||
      i > board.length - 1 ||
      j > board[0].length - 1 ||
      visited[i][j]
    ) {
      return;
    }
    visited[i][j] = true;
    word = word + board[i][j];
    if (wordDict[word] === 1) {
      output.push(word);
      wordDict[word] = wordDict[word] + 1;
    }
    dp(i, j + 1, word);
    dp(i, j - 1, word);
    dp(i + 1, j, word);
    dp(i - 1, j, word);
    visited[i][j] = false;
  }
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      dp(row, col, "", visited);
    }
  }

  console.log(JSON.stringify(output));
};

let board = [
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
    ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"],
  ],
  words = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
findWords(board, words);
