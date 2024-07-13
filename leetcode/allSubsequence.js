function printAllSubsequence(string) {
  let result = [];
  function recursion(currentString, currentIndex) {
    result.push(currentString);

    if (currentIndex === string.length) {
      return;
    }
    for (let index = currentIndex; index < string.length; index++) {
      currentString = currentString + string[index];
      recursion(currentString, index + 1);
      currentString = currentString.slice(0, -1);
    }
  }
  for (let index = 0; index < string.length; index++) {
    recursion(string[index], index + 1);
  }

  console.log(JSON.stringify(result));
}

let sequence = "abcd";
printAllSubsequence(sequence);
//a ab abc ac b bc c
