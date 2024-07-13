function printAllSubsequences(array, sum) {
  let result = [];
  function recursion(currentArray, currentIndex, currentSum) {
    if (currentSum === sum) {
      result.push([...currentArray]);
      return;
    }
    if (currentSum > sum || currentIndex >= array.length) {
      return;
    }
    currentSum = currentSum + array[currentIndex];
    currentArray.push(array[currentIndex]);
    recursion(currentArray, currentIndex, currentSum);
    currentSum = currentSum - array[currentIndex];
    currentArray.pop();
    recursion(currentArray, currentIndex + 1, currentSum);
  }
  recursion([], 0, 0);
  return result;
}

function comninationSum1(array, sum) {
  return printAllSubsequences(array, sum);
}

let array = [2,3,6,7], target = 7
console.log(JSON.stringify(comninationSum1(array, target)));
