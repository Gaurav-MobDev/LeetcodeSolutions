class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

var lowestCommonAncestor = function (root, p, q) {
  let pFound = false;
  let qFound = false;
  let pTrack = [];
  let qTrack = [];
  function dfs(node, track) {
    if (!node) {
      track = [];
      return null;
    }
    track.push(node.val);
    if (node.val === p && !qFound) {
      pFound = true;
      pTrack = [...track];
      track = [];
      return;
    }
    if (node.val === q && !pFound) {
      qFound = true;
      qTrack = [...track];
      track = [];
      return;
    }
    dfs(node.left, track);
    dfs(node.right, track);
  }
  dfs(root, []);
  let ancestor;
  for (let pindex = 0; pindex < pTrack.length; pindex++) {
    for (let qindex = 0; qindex < qTrack.length; qindex++) {
        if(pTrack[pindex] === qTrack[qindex]){
            ancestor = pTrack[pindex]
        }
    }
  }
return ancestor
};
//[3,5,1,6,2,0,8,null,null,7,4]
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

console.log(lowestCommonAncestor(root, 5, 4))
