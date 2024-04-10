class TreeNode{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

var sortedArrayToBST = function(nums) {
    function bst(array, start, end){
        if(start > end){
            return
        }
        let mid = Math.floor((start+end)/2)
        let node = new TreeNode(array[mid])
        node.left = bst(array, start , mid-1)
        node.right = bst(array, mid+1 , end)

        return node
    }
return bst(nums, 0, nums.length-1)
};

let nums = [-10,-3,0,5,9]
console.log(JSON.stringify( sortedArrayToBST(nums)))

