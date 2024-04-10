var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }
    let slowPtr = head;
    let fastPtr = head.next;

    while( slowPtr && fastPtr.next){
        if(slowPtr === fastPtr){
            return true;
        }
        slowPtr = slowPtr.next
        fastPtr = fastPtr.next.next
    }
    return false
};