var maxDepth = function(root) {
    if (root === null) {
   return 0;
 }
 let leftDepth = maxDepth(root.left);
 let rightDepth = maxDepth(root.right);
 console.log(root, '-> ',leftDepth+1,' - ', rightDepth+1)
 return Math.max(leftDepth, rightDepth) + 1;
};
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Creating a binary tree
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// Calculate the maximum depth of the binary tree using the maxDepth function
const depth = maxDepth(root);

// Output the maximum depth
console.log("Maximum depth of the binary tree:", depth); // Expected output: 3
