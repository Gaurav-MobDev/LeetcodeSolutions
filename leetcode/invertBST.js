class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(8);
root.right.right = new TreeNode(9);

var invertTree = function (root) {
  if (root) {
    let queque = [];
    queque.push(root);
    while (queque.length > 0) {
      let node = queque.pop();
      if (node.left && node.right) {
        queque.push(node.left);
        queque.push(node.right);
        let temp = node.left.val;
        node.left.val = node.right.val;
        node.right.val = temp;
      } else if (node.left && !node.right) {
        queque.push(node.left);
        node.right = new TreeNode(node.left.val);
        node.left = null;
      } else if (node.right && !node.left) {
        queque.push(node.right);
        node.left = new TreeNode(node.right.val);
        node.right = null;
      }
    }
  }

  return root;
};

console.log(JSON.stringify(invertTree(root)))