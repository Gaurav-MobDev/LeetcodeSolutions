function printAllSubsequencesChatGPTVersion(array, sum) {
    let result = [];
    function recursion(currentArray, currentIndex, currentSum) {
        if (currentIndex === array.length) {
            if (currentArray.length > 0 && currentSum === sum) {
                result.push([...currentArray]);
            }
            return;
        }
        currentSum = currentSum + array[currentIndex]
        currentArray.push(array[currentIndex])
        recursion(currentArray, currentIndex + 1, currentSum);
        currentSum = currentSum - array[currentIndex]
        currentArray.pop()
        recursion(currentArray, currentIndex + 1, currentSum);
    }
    recursion([], 0, 0);
    return result;
}


function perfectSum(array, sum){
 return printAllSubsequencesChatGPTVersion(array, sum)
}

let n = 6, arr = [5, 2, 3, 10, 6, 8], sum = 10
console.log(JSON.stringify(perfectSum(arr, sum)))