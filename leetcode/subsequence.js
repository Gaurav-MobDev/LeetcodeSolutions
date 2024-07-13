function findAllSubsequences(array) {
  let len = array.length;
  let result = [];
  let count = 0
  function find(currarray, index) {
    count++
    if (index === len) {
      result.push([...currarray]);
      return;
    }
    currarray.push(array[index]);
    find(currarray, index + 1);
    currarray.pop();
    find(currarray, index + 1);
  }
  find([], 0);
  console.log(count)
  console.log(JSON.stringify(result));
}

findAllSubsequences([1,2,3]);
