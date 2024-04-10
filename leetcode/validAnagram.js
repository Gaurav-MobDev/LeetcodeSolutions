var isAnagram = function (s, t) {
  let smap = {};
  let tmap = {};
if(s.length !== t.length){
    return false
}
  for (let char of s) {
    if (smap[`${char}`]) {
        smap[`${char}`] += 1;
    } else {
      smap[`${char}`] = 1;
    }
  }
  for (let char of t) {
    if (tmap[`${char}`]) {
        tmap[`${char}`] += 1;
    } else {
      tmap[`${char}`] = 1;
    }
  }
  let anagram = true;
  console.log(JSON.stringify(smap))
  console.log(JSON.stringify(tmap))
  for (let char in smap) {
    if (smap[`${char}`] !== tmap[`${char}`]) {
      anagram = false;
      break;
    }
  }
  return anagram
};

let s = "anagram", t = "nagaram"
console.log(isAnagram(s,t))
