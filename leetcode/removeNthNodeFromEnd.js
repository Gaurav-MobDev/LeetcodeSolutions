class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Helper function to create a linked list
const createLinkedList = (values) => {
    let head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }
    return head;
};


let values = [1,2]

let head = createLinkedList(values);


var removeNthFromEnd = function(head, n) {
   // Create a dummy node to handle edge cases
   let dummy = new ListNode(0);
   dummy.next = head;

   let first = dummy;
   let second = dummy;

   // Move first pointer n+1 steps ahead
   for (let i = 1; i <= n + 1; i++) {
       first = first.next;
   }

   // Move both pointers until the first pointer reaches the end
   while (first !== null) {
       first = first.next;
       second = second.next;
   }

   // Remove the nth node by updating the next pointer of the second pointer
   second.next = second.next.next;

   return dummy.next;
};
//let values = [1, 2, 3, 4, 5];
// Sample input
let n = 2;
let result = removeNthFromEnd(head, n);
console.log(JSON.stringify(result));