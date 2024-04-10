class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
// root.right = new TreeNode(8);
// root.left.left = new TreeNode(11);
// root.left.left.left = new TreeNode(7);
// root.left.left.right = new TreeNode(2);
// root.right.right = new TreeNode(4);
// root.right.left = new TreeNode(13);
// root.right.right.right = new TreeNode(1);
console.log(JSON.stringify(root))

var hasPathSum = function(root, targetSum) {
    let found = false
    let height = 0
    function dfs(root, sum, index = 0){
        height += index
        if(!root.left && !root.right ){
            console.log(sum)
            if(sum === targetSum){
                found = true
            }
            return
        }
        sum += root.val
        dfs(root.left, sum, index+1)
       
        dfs(root.right, sum, index+1)
    }
    dfs(root, 0)
    console.log(found)
};

hasPathSum(root, 1)