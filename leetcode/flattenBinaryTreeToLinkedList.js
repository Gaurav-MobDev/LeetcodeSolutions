class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var flatten = function (root) {
  if (!root) {
    return null;
  }
  let travel = root;

  while (travel) {
    if (travel.right) {
      if (travel.left) {
        let temp = travel.right;
        travel.right = travel.left;
        travel.left = null;

        let right = travel.right;
        while (right.right) {
          right = right.right;
        }
        right.right = temp;
      }
    }else{
        if(travel.left){
            travel.right = travel.left
            travel.left = null
        }
    }
    travel = travel.right;
  }
  return root;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
// root.right = new TreeNode(5);
// root.left.left = new TreeNode(6);
// root.left.right = new TreeNode(7);
// root.right.left = new TreeNode(8);
// root.right.right = new TreeNode(9);

const flattenResult = flatten(root);
console.log(JSON.stringify(flattenResult));
