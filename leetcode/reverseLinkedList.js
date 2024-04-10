
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

// Example usage:
const values = [5];
const linkedList = createLinkedList(values);


var reverseBetween = function (head, left, right) {
  if (!head) {
    return;
  }
  let current = head;
  let leftIndex = 1;
  while (current && leftIndex <= left && left <= right) {
    let rightIndex = leftIndex;
    let temp;
    if (leftIndex === left) {
      temp = current.val;
      let rightNode = current;
      while (rightNode && rightIndex <= right) {
        if (rightIndex === right) {
          current.val = rightNode.val;
          rightNode.val = temp;
          left++;
          right--;
          break;
        }
        rightNode = rightNode.next;
        rightIndex++;
      }
    }
    leftIndex++;
    current = current.next;
  }
  return head
};

let head = [1,2,3,4,5], left = 1, right = 1
console.log(JSON.stringify(reverseBetween(linkedList, left, right)))