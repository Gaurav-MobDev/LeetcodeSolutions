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
  const arr1 = [4,1,8,4,5]
  const arr2 = [5,6,1,8,4,5]
  
  // Create linked lists from the arrays
  const l1 = createLinkedList(arr1);
  const l2 = createLinkedList(arr2);

var getIntersectionNode = function (headA, headB) {
  let hashMap = {};
  let currentA = headA;
  let currentB = headB;
  while (currentA.next) {
    console.log(JSON.stringify(currentA))
    if (hashMap[`${currentA}`]) {
      hashMap[`${currentA}`] = hashMap[`${currentA}`] + 1;
    } else {
      hashMap[`${currentA}`] = 1;
    }
    currentA = currentA.next;
  }

  while (currentB.next) {
    if (hashMap[`${currentB}`]) {
      hashMap[`${currentB}`] = hashMap[`${currentB}`] + 1;
    } else {
      hashMap[`${currentB}`] = 1;
    }
    currentB = currentB.next;
  }
  console.log(JSON.stringify(hashMap));
  for (let hash in hashMap) {
    console.log(JSON.stringify(hash));
    if (hashMap[hash] > 1) {
      return hash.val;
    }
  }
};

console.log(getIntersectionNode(l1, l2))