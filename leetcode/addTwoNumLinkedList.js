var addTwoNumbers = function (l1, l2) {
  let newList = new ListNode();
  let current = newList;
  let takeOver = 0;

  while (l1 || l2 || takeOver) {
    sum = (l1 && l1.val) + (l2 && l2.val) + takeOver;
    current.next = new ListNode(sum % 10);
    takeOver = Math.floor(sum / 10);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;

    current = current.next;
  }

  let result = [];
  while (newList) {
    result.push(newList.val);
    newList = newList.next;
  }
  console.log(JSON.stringify(result));
};

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to create a linked list from an array of values
const createLinkedList = (arr) => {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
};

// Example input arrays for the linked lists
const arr1 = [9, 9, 9, 9, 9, 9, 9];
const arr2 = [9, 9, 9, 9];

// Create linked lists from the arrays
const l1 = createLinkedList(arr1);
const l2 = createLinkedList(arr2);

// Usage of addTwoNumbers function with l1 and l2 as inputs
const result = addTwoNumbers(l1, l2);
