var isValid = function (s) {
  s = s.split("");
  let stack = [];

  for (let index = 0; index < s.length; index++) {
    stack.push(s[index]);
    if (
      (s[index] === ")" && stack[stack.length - 2] === "(") ||
      (s[index] === "}" && stack[stack.length - 2] === "{") ||
      (s[index] === "]" && stack[stack.length - 2] === "[")
    ) {
      stack.pop();
      stack.pop();
    } else if (
        (s[index] === ")" && stack[stack.length - 2] !== "(") ||
        (s[index] === "}" && stack[stack.length - 2] !== "{") ||
        (s[index] === "]" && stack[stack.length - 2] !== "[")
      ){
      break;
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

let s = "()";

console.log(isValid(s));
