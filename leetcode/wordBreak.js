var wordBreak = function (s, wordDict) {
  s = s.split("");
  function dp(string, dict, index=0) {
    if(index > wordDict.length){
        return !(string.length > 0)
    }
    let found = true
    for (let dictindex = index; dictindex < dict.length; dictindex++) {
      word = dict[dictindex].split("");
      let wordIndex = 0;
      for (let sindex = 0; sindex < string.length; sindex++) {
        if (word[wordIndex] === string[sindex]) {
          wordIndex++;
        } else {
          wordIndex = 0;
        }
        if (wordIndex === word.length) {
            found = true
            if(sindex === s.length-1){
                string.splice(0, index+1);

            }else{
                string.splice(sindex - (word.length - 1), word.length);

            }
          console.log(string);
          wordIndex = 0;
          sindex = -1;
        }
      }
    }
   return dp(string, dict,index+1)
  }
  let result = true
  for(let dictindex = 0; dictindex < wordDict.length; dictindex++){
let sCopy = [...s]
    result =  dp(sCopy, wordDict, dictindex)
    if(result){
        break
    }
  }
  return result
};

let s = "cars"
  wordDict = ["car","ca","rs"]
// "cars", ["car","ca","rs"]
console.log(wordBreak(s, wordDict));
