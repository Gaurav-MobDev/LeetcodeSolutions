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
    append(data){
        let node = new ListNode(data)

        if(!this.head){
            this.head = node
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = node
    }

}

var partition = function (head, x) {
    if(!head){
        return 
    }
    let leftList = new LinkedList();
    let rightList = new LinkedList();
    let current = head
    while(current){
        if(current.val < x){
            leftList.append(current.val)
        }else {
            rightList.append(current.val)
        }
        current = current.next
    }
    let leftCurrent = leftList.head
    while(leftCurrent.next){
        leftCurrent = leftCurrent.next
    }
    leftCurrent.next = rightList.head
    return  leftList.head
};

let head = [1,4,3,2,5,2], x = 3
let list= new LinkedList()

function createListFromArray(array){
    for(let value of array){
        list.append(value)
    }
    console.log(JSON.stringify(list))
}
createListFromArray(head)
let result = partition(list.head, x)
console.log(JSON.stringify(result))