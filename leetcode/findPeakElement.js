class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0;
  }

  function binaryTree(array, start = 0, end = array.length-1) {
    if (end === start) {
      return start;
    }
    let mid = Math.floor(start + (end - start) / 2);
    if (array[mid] < array[mid + 1]) {
        return binaryTree(array, mid + 1, end);
    } else {
        return binaryTree(array, start, mid);
    }
  }
 
  console.log(JSON.stringify(binaryTree(nums)));
};
let nums = [1, 2, 10, 3, 1, 1, 1];
findPeakElement(nums);
