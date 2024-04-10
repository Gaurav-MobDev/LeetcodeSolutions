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

const values = [1, 2, 3];
const linkedList = createLinkedList(values);
console.log(JSON.stringify(linkedList))
var rotateRight = function (head, k) {
  if (!head) {
    return;
  }
  let length = 0;
  let tempcurrent = head; 

  while (tempcurrent) {
    tempcurrent = tempcurrent.next
    length++
  }
  let shifts = 0;
  let limit = k%length
  while (shifts < limit) {
    let current = head; 
    let previous  = current;
    let index = 0;
    while (current) {
      if (index === 0) {
        previous.val = current.val;
      } else {
        let temp = current.val;
        current.val = previous.val;
        previous.val = temp;
      }
      current = current?.next;
      index++;
    }
    shifts++;
  }
  return head;
};

console.log(JSON.stringify(rotateRight(linkedList, 2000000000)))