var getMinimumDifference = function (root) {
  if (!root) {
    return;
  }
  let result = [];
  function inorder(root) {
    if (!root) {
      return;
    }

    inorder(root.left);
    result.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  let minDifference = Infinity;
  for (let index = 0; index < result.length - 1; index++) {
    if (result[index + 1] - result[index] < minDifference) {
      minDifference = result[index + 1] - result[index];
    }
  }
  return minDifference;
};
