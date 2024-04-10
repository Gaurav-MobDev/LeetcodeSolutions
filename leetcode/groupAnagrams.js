var groupAnagrams = function (strs) {
  let strsCopy = [...strs];
  for (let index = 0; index < strsCopy.length; index++) {
    strsCopy[index] = strsCopy[index].split("").sort().join("");
    console.log(strsCopy[index].split("").sort().join(""));
  }
  console.log(JSON.stringify(strsCopy));
  let anagrams = [];
  let tempArray = []
  let map = {}
  for (let index = 0; index < strsCopy.length; index++) {
    tempArray = []
    if(map[`${strsCopy[index]}`] === undefined){
        map[`${strsCopy[index]}`] = 1
        for (let subindex = 0; subindex < strsCopy.length; subindex++) {
            if(strsCopy[index] === strsCopy[subindex]){
                tempArray.push(strs[subindex])
            }
        }
        anagrams.push(tempArray)
    }

  }
  console.log(JSON.stringify(anagrams));
};

let strs = ["a"];
groupAnagrams(strs);
