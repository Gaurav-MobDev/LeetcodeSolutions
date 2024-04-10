var isPalindrome = function(x) {
    x = `${x}`.split('')
    let left = 0
    let right = x.length-1
    let isPal = true
    while(left<=right){
        if(x[left] !== x[right]){
                isPal = false
                break
        }
        left++
        right--
    }
    console.log(isPal)
};

let x = 1
isPalindrome(x)