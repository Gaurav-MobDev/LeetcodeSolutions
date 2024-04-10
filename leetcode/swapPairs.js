class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Function to create a linked list from an array of values
  const createLinkedList = (values) => {
    if (!values || values.length === 0) {
      return null;
    }
  
    // Create the head node
    const head = new ListNode(values[0]);
    let current = head;
  
    // Create and link the remaining nodes
    for (let i = 1; i < values.length; i++) {
      const newNode = new ListNode(values[i]);
      current.next = newNode;
      current = newNode;
    }
  
    return head;
  };
  const values = [1, 2, 3, 4];
  const linkedList = createLinkedList(values);
 // console.log(JSON.stringify(linkedList))
var swapPairs = function (head) {
    let dummy = new ListNode(0)
    dummy.next = head;
    let prev = dummy
    while (prev.next !== null && prev.next.next !== null) {
       let currentNode = prev.next
       let nextNode = prev.next.next
       prev.next = nextNode
       currentNode.next = nextNode.next
       prev.next.next = currentNode
       prev = prev.next.next
    }
    return dummy.next
};

console.log(JSON.stringify(swapPairs(linkedList)))