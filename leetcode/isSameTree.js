var isSameTree = function(p, q) {
    let pResult = []
    let qResult = []

    function dfsP(root){
        if(root !== null){
            pResult.push(root.val)
            dfsP(root.left)
            dfsP(root.right)
        } else{
            pResult.push(null)
        }       
    }

    function dfsQ(root){
        if(root !== null){
            qResult.push(root.val)
            dfsQ(root.left)
            dfsQ(root.right)
        } else{
            qResult.push(null)
        }   
    }

    dfsP(p)
    dfsQ(q)

    console.log(JSON.stringify(pResult), JSON.stringify(qResult))
    let isTrue = true
    for(let index = 0;index<pResult.length;index++){
        if(pResult[index] !== qResult[index]){
            isTrue = false
            break
        }
    }
    console.log(isTrue)
};

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Creating a binary tree
const rootP = new TreeNode(1);
rootP.left = new TreeNode(2);
// rootP.right = new TreeNode(20);
// rootP.right.left = new TreeNode(15);
// rootP.right.right = new TreeNode(7);

const rootQ = new TreeNode(1);
rootQ.right = new TreeNode(2);
// rootQ.right = new TreeNode(20);
// rootQ.right.left = new TreeNode(15);
// rootQ.right.right = new TreeNode(7);

isSameTree(rootP,rootQ)