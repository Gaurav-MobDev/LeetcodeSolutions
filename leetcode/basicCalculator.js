var calculate = function(s) {
    s = s.trim('')
    let splitString = s.split('')
    console.log(JSON.stringify(splitString))
    function calc(array, index, sum){
        if(array[index] === ')'){
            return sum
        }else if(array[index] === '('){
            calc(array, index+1, sum)
        }else{
            if(array[index] === '+'){
                sum = sum + parseInt(array[index-1])
            }else if(array[index] === '-'){
                sum = sum -  parseInt(array[index-1])
            }
            calc(array,index+1, sum)
        }
    }
    let sum = calc(splitString, 0, 0)
    console.log(sum)
};

let s = "(1+(4+5+2)-3)+(6+8)"
//"(1+(4+5+2)-3)+(6+8)"
//" 2-1 + 2 "
// "1 + 1"
calculate(s)