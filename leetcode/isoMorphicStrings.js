var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
          return false;
      }
  
      const sMap = new Map();
      const tMap = new Map();
  
      for (let i = 0; i < s.length; i++) {
          const sChar = s[i];
          const tChar = t[i];
  
          // Check if the mapping is consistent for both s and t
          if ((sMap.has(sChar) && sMap.get(sChar) !== tChar) ||
              (tMap.has(tChar) && tMap.get(tChar) !== sChar)) {
              return false;
          }
  
          // Update the mapping for both s and t
          sMap.set(sChar, tChar);
          tMap.set(tChar, sChar);
      }
  
      return true;
  };

let s = "geg", t = "qcc"

console.log(isIsomorphic(s, t))