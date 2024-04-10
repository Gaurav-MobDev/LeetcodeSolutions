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
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);
root.left.left.right = new TreeNode(9);
root.left.right.left = new TreeNode(10);
root.right.right.right = new TreeNode(11);
root.right.left.left = new TreeNode(12);
root.right.left.right = new TreeNode(13);
root.right.right.left = new TreeNode(14);
root.right.right.right = new TreeNode(15);

var zigzagLevelOrder = function (root) {
  let queue = [root];
  let index = 0;
  let currentArray = []
  let levelArray = [[root.val]]
  while (queue.length > 0) {
   
   
    if(index%2 === 0){
        let node = queue.pop()
        if (node.right) {
            queue.unshift(node.right);
            currentArray.push(node.right.val);
          }
          if (node.left) {
            queue.unshift(node.left);
            currentArray.push(node.left.val);
          }
    }else{
        let node = queue.shift()
        if (node.left) {
            queue.push(node.left);
            currentArray.push(node.left.val);
          }
          if (node.right) {
            queue.push(node.right);
            currentArray.push(node.right.val);
          }
    }
   
    if(currentArray.length === queue.length){
        index++;
        if(currentArray.length > 0){
            levelArray.push(currentArray)
        }
        
        currentArray = []
    }
  }

  console.log(JSON.stringify(levelArray));
};

zigzagLevelOrder(root);
