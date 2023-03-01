var middleNode = function(head) {
    // fast and slow algo? 
    // Think of pointers -> a variable holding the value of the next node. Here are two pointers at 1x and 2x
    let slow = head
    let fast = slow
    // Iterate through until we reach the end of our list (tail == null)
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
    
};
