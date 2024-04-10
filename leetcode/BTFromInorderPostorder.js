function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var buildTree = function(inorder, postorder) {
    function rec(ino, posto) {
        if (ino.length <= 0) {
            return null;
        }
        let root = new TreeNode(posto.pop());
        let index = ino.indexOf(root.val);

        root.right = rec(ino.slice(index + 1), posto);
        root.left = rec(ino.slice(0, index), posto);
        return root;
    }

    let tree = rec(inorder, postorder);
    console.log(JSON.stringify(tree));
};

let inorder = [9, 3, 15, 20, 7],
  postorder = [9, 15, 7, 20, 3];
buildTree(inorder, postorder);
