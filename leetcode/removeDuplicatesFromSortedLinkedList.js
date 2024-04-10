class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    let node = new ListNode(data);

    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}

let head = [1, 2, 3, 3, 4, 4, 5];
let list = new LinkedList();

function createListFromArray(array) {
  for (let value of array) {
    list.append(value);
  }
}
createListFromArray(head);

var deleteDuplicates = function (head) {
    let current = head
    let prev = head;
    while (current) {
        if(current?.val === current?.next?.val){
            let temp = current?.val
            while (current?.next?.val === temp) {
                current.next = current.next.next
            }
        }else{
            current = current.next
        }
    }
    return head
};

console.log(JSON.stringify(deleteDuplicates(list)));
