var letterCombinations = function (digits) {
  digits = digits.split("");
  let result = [];
  let digitsLength = digits.length;
  if(digitsLength === 0){
    return []
  }
  let charMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  function backTrack(element, array, index) {
    array.push(element);
    index = index+1
    if (index === digitsLength) {
     array = array.join('')
      result.push(array);
      return;
    }
    for (
      let subCharIndex = 0;
       subCharIndex < charMap[`${digits[index]}`].length;
      subCharIndex++
    ) {
      backTrack(charMap[`${digits[index]}`][subCharIndex], array, index);
      array.pop();
    }
   
  }
  for (let index = 0; index < charMap[`${digits[0]}`].length; index++) {
    backTrack(charMap[`${digits[0]}`][index], [], 0);
  }
  console.log(JSON.stringify(result));
};

let digits = "";
letterCombinations(digits);
