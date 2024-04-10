// var lengthOfLongestSubstring = function (s) {
//     if(s.length === 1){
//         console.log(s.length)
//         return 1
//     }
//   let map = {};
//   let string = "";
//   let newString = '';
//   for (let index = 0; index < s.length; index++) {
//     for (let subindex = index; subindex < s.length; subindex++) {
//       if (!map[`${s[subindex]}`]) {
//         map[`${s[subindex]}`] = 1;
//         string += s[subindex];
//       } else {
//         console.log(string)
//         if(newString.length>0 && newString.length < string.length){
//             newString = string
//         }
//         if(newString.length === 0){
//             newString = string
//         }
//         map = {};
//         string = "";
//         break;

//       }
//     }
//   }
//   console.log(newString, newString.length);
//   return newString.length
// }; (n2)

var lengthOfLongestSubstring = function (s) {
  let string = "";
  let allStrings = [];
  let ptr = 0;
  let map = {};
  while (ptr < s.length) {
    if (map[`${s[ptr]}`] == null) {
      map[`${s[ptr]}`] = ptr;
      string += s[ptr];
      //console.log(JSON.stringify(map))
    }else{
       
        allStrings.push(string)
        map[`${s[ptr]}`] = string.length -  map[`${s[ptr]}`]+1;
        string = string.substring(map[`${s[ptr]}`], string.length)
        string += s[ptr];
        console.log(string)
        map[`${s[ptr]}`] = ptr;
    }
    ptr++
  }
console.log(allStrings)
};

let s = "abacdecbgfl";
lengthOfLongestSubstring(s);
