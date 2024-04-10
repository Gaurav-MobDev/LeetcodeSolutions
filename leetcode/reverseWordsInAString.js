var reverseWords = function (s) {
  let copy = "";
  let chars = 0;
  let reversedIndex = 0;
  s = s.trim(' ')
  for (let index = s.length - 1; index >= 0; index--) {
    chars++;
    if (s[index] === " " || index === 0) {
      let limit = index === 0 ? chars : index + chars;
      let start = index === 0 ? 0 : index + 1;
      for (let subindex = start; subindex < limit; subindex++) {
        copy += s[subindex];
        reversedIndex = reversedIndex + 1;
      }
      if (index !== 0) {
        copy += " ";
      }
      chars = 0;
    }
    let multipleSpaces = false
    while(s[index] === ' '){
        index--
        multipleSpaces = true
    }
    if(multipleSpaces){
        index++
    }
  }
  s = copy;
  console.log(s);
};

reverseWords("  hello world  ");
