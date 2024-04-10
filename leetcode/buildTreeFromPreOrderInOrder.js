class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var buildTree = function(preorder, inorder) {
    let root = new TreeNode(preorder[0])
    let current = root
    for(let index = 1;index <preorder.length;index++){
        let rootindex = inorder.findIndex(item => item === current.val)
        let rightindex = inorder.findIndex(item => item === preorder[index])
        if(rightindex > rootindex){
            current.right = new TreeNode(preorder[index])
            console.log(JSON.stringify(current))
        }else{
            current.left = new TreeNode(preorder[index])
            console.log(JSON.stringify(current))
        } 
    }
    console.log(JSON.stringify(root))
    return root
};

let preorder = [3,9,20], inorder = [9,3,20]

buildTree(preorder, inorder)
