/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim(" ");
  let num = 0;
  let isNegative = false;

  for (let index = 0; index < s.length; index++) {
    if (index === 0 && s[0] === "-") {
      isNegative = true;
      continue;
    } else if (index === 0 && s[0] === "+") {
      continue;
    } else if (num >= 0 && (s[index] === " " || isNaN(parseInt(s[index])))) {
      break;
    } else {
      num = num * 10 + parseInt(s[index]);
    }
  }
  if (isNegative && -num < -Math.pow(2, 31)) {
    num = Math.pow(2, 31);
  }
  if (!isNegative && num > Math.pow(2, 31) - 1) {
    num = Math.pow(2, 31) - 1;
  }
  return isNegative ? -num : num;
};

let s = "35445";
console.log(myAtoi(s));
