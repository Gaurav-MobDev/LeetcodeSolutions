var generateParenthesis = function (n) {
  let result = [];
  let size = 0;
  function bt(current, openCount, closeCount) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    if (openCount < 3) {
      bt(current+"(", openCount+1, closeCount);
    }
    if (closeCount < openCount) {
      bt(current+")", openCount, closeCount + 1);
    }
  }

  bt('', 0, 0);
  console.log(JSON.stringify(result));
};

let n = 3;
generateParenthesis(n);
