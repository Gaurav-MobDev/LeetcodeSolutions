var connect = function (root) {
  root.next = null
  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    {
        node.left.next = node.right
        if(node.next == null){
            node.right.next = null
        }else{
            node.right.next = node.next
        }
    }
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
};
