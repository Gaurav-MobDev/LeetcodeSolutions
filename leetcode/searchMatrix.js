var searchMatrix = function(matrix, target) {
    let m = matrix[0].length;
    let n = matrix.length
  const recursiveSearch = (start, end) =>{
    const mid = Math.floor((start + end) / 2);
    let i =  Math.floor((mid) / m);
    let j =  mid % m;
    if (end < start) {
      return false
    }
    if (matrix[i][j] === target) {
      return true;
    } else if (target < matrix[i][j]) {
     return recursiveSearch(start, mid - 1);
    } else {
     return  recursiveSearch(mid + 1, end);
    }
  }
  console.log(recursiveSearch(0, m*n-1));
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 68
searchMatrix(matrix, target)