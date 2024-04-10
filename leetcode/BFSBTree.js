class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  let result = '';
  let level = 0;
  let previousLevel = level;
  let currentLevel = '';
  while (queue.length > 0) {
    if (level > 0) {
        level--
    }
    // for (let i = 0; i < levelSize; i++) {
    const currentNode = queue.shift();
    currentLevel += `${currentNode.val}`
   // push(currentNode.val);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    //  }
    previousLevel = level;
    if (previousLevel === 0) {
      level = queue.length;
      result += currentLevel
      currentLevel = '\n'

    }
  }
  return result;
};

var dfs = function(root){
    if(!root){
        return ''
    }
    console.log(root.val)

    if(root.left){
        dfs(root.left)
    }
    if(root.right){
        dfs(root.right)
    }
}

const root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(8);
root.right.right = new TreeNode(9);

const bfsResult = dfs(root);
console.log(JSON.stringify(bfsResult));
