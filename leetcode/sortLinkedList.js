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

const values = [4,2,1,3]
const linkedList = createLinkedList(values);

var sortList = function (head) {
  if (head) {
    let current = head;
    let prev;
    let min;
    let minNode;
    let prevMinNode;
    while (current) {
      min = Infinity;
      let innerCurrent = current;
      prevMinNode = current
      while (innerCurrent) {
        if (innerCurrent.val < min) {
          prevMinNode = prev
          min = innerCurrent.val;
          minNode = innerCurrent;
          if (!innerCurrent.next) {
            break;
          }
        }
        prev = innerCurrent;
        innerCurrent = innerCurrent.next;
      }
      if(head.val > minNode.val){
        let temp = head;
        prevMinNode.next = minNode.next;
        head = minNode;
        minNode.next = temp;
      }else{
        let temp = current;
        prevMinNode.next = minNode.next;
        current.next = minNode;
        minNode.next = temp.next;
      }
    }
    current = current.next;
  }
  return head;
};

console.log(JSON.stringify(sortList(linkedList)));
