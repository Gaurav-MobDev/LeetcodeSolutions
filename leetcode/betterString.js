function printAllSubsequencesChatGPTVersion(string) {
    let result = new Set();
    function recursion(currentString, currentIndex) {
        if (currentIndex === string.length) {
            if (currentString !== "") {
                result.add(currentString);
            }
            return;
        }
        // Include the current character
        recursion(currentString + string[currentIndex], currentIndex + 1);
        // Exclude the current character
        recursion(currentString, currentIndex + 1);
    }
    recursion("", 0);
    return result.size;
}



function printAllSubsequence(string) {
    let result = {};
    function recursion(currentString, currentIndex) {
        if(!result[currentString]){
            result[currentString] = 1
        }
  
      if (currentIndex === string.length) {
        return;
      }
      for (let index = currentIndex; index < string.length; index++) {
        currentString = currentString + string[index];
        recursion(currentString, index + 1);
        currentString = currentString.slice(0, -1);
      }
    }
    for (let index = 0; index < string.length; index++) {
      recursion(string[index], index + 1);
    }
  return Object.keys(result).length;
  }


function betterString(string1, string2){

let str1Length = printAllSubsequence(string1)
let str2Length = printAllSubsequence(string2)
 return str1Length > str2Length ? string1: string2
}
const str1 = "gfg", str2 = "ggg"
console.log(betterString(str1, str2))