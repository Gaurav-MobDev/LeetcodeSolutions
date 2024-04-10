class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.right = new TreeNode(2);

var kthSmallest = function(root, k) {
    let index = 0;
    let result;
 function dst(root){
    if(!root){
        return
    }
   
    dst(root?.left)
        index++;
        if(index === k){
            result = root?.val
        }
    dst(root?.right)
 }
 dst(root)
 console.log(result)
};

kthSmallest(root, 4)