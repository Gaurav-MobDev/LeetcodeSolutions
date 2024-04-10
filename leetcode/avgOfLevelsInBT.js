
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

root.right.right = new TreeNode(6);
root.right.left = new TreeNode(7);
console.log(JSON.stringify(root))


var averageOfLevels = function(root) {
    let queue = []
    queue.push(root)
    let levelArray = []
    levelArray.push(root.val)
    let currentArray = []
    let currentSum = 0
    while(queue.length > 0){
        let node = queue.shift()
       
        if(node.left){
            queue.push(node.left)
            currentArray.push(node.left.val)
            currentSum += node.left.val
        }
        if(node.right){
            queue.push(node.right)
            currentArray.push(node.right.val)
            currentSum += node.right.val
        }
        if(currentArray.length === queue.length){
            if(currentArray.length > 0){
                levelArray.push(currentSum/currentArray.length)
            }
            
            currentArray = []
            currentSum = 0
        }

    }

    console.log(JSON.stringify(levelArray))
};

averageOfLevels(root)