class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
//root.right.right = new TreeNode(4);
console.log(JSON.stringify(root))

var rightSideView = function(root) {
    if (!root) return [];
    let height = 0
    let result = {0: [root]}
    let queque = [root]
    let bfs = []
    let finalResult = []
    let currentHeight=0
    let prevHeight = 1
    let array = []
    while(result[height].length > 0){
       
        if(result[height].length === 1){
           finalResult.push(result[height][0].val)
        }
        let node = result[height].shift()
        if(result[height].length === 0){
            height++
        }
        bfs.push(node.val)
        console.log(node.val)
        let temp = currentHeight
        if(prevHeight === 0){
            currentHeight = 0
            prevHeight  = temp
        }
        if(node.left){
            queque.push(node.left)
            array.push(node.left)
            if(prevHeight > 0){
                currentHeight++
            }
        }
        if(node.right){
            queque.push(node.right)
            array.push(node.right)
            if(prevHeight > 0){
                currentHeight++
            }
        }
        prevHeight-- 
        if(prevHeight === 0){
            result[height] = [...array]
            array = []
        }     
    } 
    console.log(JSON.stringify(bfs))

    console.log(JSON.stringify(finalResult))
};

rightSideView(root)