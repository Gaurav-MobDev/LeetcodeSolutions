var isHappy = function (n) {
    let sum=0
    let num = n
    let isHappynum = false
    let set = {}
    while (sum !== 1) {
        sum = 0
        while (num > 0) {
            let digit = num % 10
            sum += digit * digit
            num = Math.floor(num / 10)
        }
        if(set[`${sum}`]){
            break
        }else{
            set[`${sum}`] = sum
        }
        if(sum === 1){
            isHappynum = true
            break
        }else{
            num = sum
        }
    }
    return isHappynum
};

let n = 2
console.log(isHappy(n))