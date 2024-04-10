class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var buildTree = function (preorder, inorder) {
    if(preorder.length.length === 0 || inorder.length === 0){
        return null
    }
  let root = new TreeNode(preorder[0]);
  let rootIndex = inorder.indexOf(preorder[0]);
  root.left = buildTree(
    preorder.slice(1, rootIndex+1),
    inorder.slice(0, rootIndex)
  );
  root.right =buildTree(
    preorder.slice(rootIndex+1),
    inorder.slice(rootIndex+1)
  );
  return root;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(8);
root.right.right = new TreeNode(9);

let preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];
console.log(JSON.stringify(buildTree(preorder, inorder)));
