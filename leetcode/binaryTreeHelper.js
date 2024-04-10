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