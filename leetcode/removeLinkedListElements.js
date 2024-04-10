var removeElements = function (head, val) {
    let dummy = new ListNode(0)
    dummy.next = head;
    let prev = dummy
    let current = dummy.next
    while (current) {
        if (current.val === val) {
            prev.next = current.next
        } else {
            prev = current
        }

        current = current.next
    }
    return dummy.next
};