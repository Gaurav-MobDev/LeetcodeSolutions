var isPalindrome = function(s) {
    //65-122, 48-57
    let charsOnlyString = ''
    for(let i = 0; i < s.length; i++){
        let code = s.charCodeAt(i);
        if((code >=48 && code <=57) || (code >=65 && code <=90) || (code >=97 && code <=90)){
            charsOnlyString += s[i].toLowerCase()
        }
    }let reverseString = ''
    for(let i = charsOnlyString.length-1; i >= 0; i--){
        
        reverseString += charsOnlyString[i]
        
    }
    console.log(reverseString, charsOnlyString)
    console.log(reverseString === charsOnlyString)

    return reverseString === charsOnlyString
};

isPalindrome("ab_a")