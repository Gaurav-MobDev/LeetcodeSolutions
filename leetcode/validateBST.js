class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(16);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(17);
root.right.left.right = new TreeNode(14);
root.right.left.left = new TreeNode(2);

var isValidBST = function(root) {
    if(!root){
   return false
 }  

 function inorder(root, result){
    if(!root){
        return
    }
    inorder(root.left, result)
    result.push(root.val)
    inorder(root.right, result)
 }
 let result = []
 inorder(root, result)

 for(let index = 0 ;index < result.length-1 ;index++){
    if(result[index] > result[index+1]){
        return false
    }
 }
 return true
};

console.log(isValidBST(root))