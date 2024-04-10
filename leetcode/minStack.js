var MinStack = function() {
     this.stack = []
    this.minimumStack = []
    this.min = Infinity

};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(val < this.min){
        this.min = val
       this.minimumStack.push(min)
    }
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   if(this.stack[this.stack.length-1] === this.minimumStack[this.minimumStack.length-1]){
    this.minimumStack.pop()
   }
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minimumStack[this.minimumStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */