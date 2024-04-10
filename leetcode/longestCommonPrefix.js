var longestCommonPrefix = function (strs) {
    if(strs.length <= 1){
        console.log(strs[0])
        return strs[0]
    }
  let minLength = +Infinity;
  for (let index = 0; index < strs.length; index++) {
    if (strs[index].length < minLength) {
      minLength = strs[index].length;
    }
  }
  let commonFound = false
  let common = 0
  let prefix = ''
  let commonLetter = ''
  outerloop: for (let prefixIndex = 0; prefixIndex < minLength; prefixIndex++) {
   
    for (let strsIndex = 0; strsIndex < strs.length-1; strsIndex++) {
        if(strs[strsIndex][prefixIndex] !== strs[strsIndex+1][prefixIndex]){
            commonFound = false
            break
        }else{
            commonFound = true
        }
    }
    if(commonFound){
        prefix = prefix + strs[0][prefixIndex]
    }
    if(!commonFound){
        break
    }
  }
  console.log(prefix)
};
longestCommonPrefix([""])
