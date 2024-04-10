var romanToInt = function (s) {
  let coversionMap = {
    
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    III: 3,
    II: 2,
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    
  };
  let integer = 0;
  console.log(coversionMap.size)
  outerloop: for (let index = 0; index < s.length; index++) {
    for (let key in coversionMap) {
        if(s[index]+s[index+1]==key){
            integer = integer + coversionMap[key];
            index++;
            continue outerloop
        }
      if (s[index] == key) {
        console.log(key)
        integer = integer + coversionMap[key];
      }
    }
  }
  console.log(integer);
  return integer;
};

romanToInt("III");
//1994
