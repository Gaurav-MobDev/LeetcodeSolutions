var lengthOfLastWord = function(s) {
    let trimmedString = s.trim();
    let splitString = trimmedString.split(' ')
    let length = splitString.length
    console.log(splitString[length-1].length)
    return trimmedString[length-1].length
};

lengthOfLastWord( "luffy is still joyboy")