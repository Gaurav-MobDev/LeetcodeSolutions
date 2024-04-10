var spiralOrder = function (matrix) {
  let m = matrix.length - 1;
  let n = matrix[0].length - 1;
  let size = (m +1)* (n+1);
  let index = 0;
  let iDirection = '-';
  let jDirection = '+';
  let pauseJ = false;
  let result = [];
  let prevI = 0;
  let prevJ = 0;
  let i = 0;
  let j = 0;

  while (index < size) {
    prevI = i
    prevJ = j
   
    if((i===0 && j <= n)){
        j++
    }

    if((i===m+1 && j >= 0)){
        i=m
        j--
    }

    if((j===n+1 && i <= m)){
        j = n
        i++
    }

    if((j===0 && i >= 0)){
        i--
    }
    if(prevI>=0 && prevJ <=n && prevJ >=0 && prevI <=m){
        console.log("i= ", prevI, "j= ", prevJ, ' - ', matrix[prevI][prevJ]);
        result.push(matrix[prevI][prevJ]);
        matrix[prevI][prevJ] = "V";
    }
 
    index++;
  }
  return result;
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(JSON.stringify(spiralOrder(matrix)));
