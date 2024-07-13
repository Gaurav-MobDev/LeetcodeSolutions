var trap = function (height) {
    let leftMax = height[0]
    let rightMax = height[height.length - 1]
    let leftIndex = 0
    let rightIndex = height.length - 1
    let sum = 0
    while (leftIndex < rightIndex) {
        if (leftMax < rightMax) {
            leftIndex++
            leftMax = Math.max(leftMax, height[leftIndex]) 
            sum += leftMax - height[leftIndex]
        } else {
            rightIndex--
            rightMax = Math.max(rightMax, height[rightIndex]) 
            sum += rightMax- height[rightIndex]

        }
    }
    return sum
};

let height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))