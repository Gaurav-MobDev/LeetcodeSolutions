var plusOne = function(digits) {
    let length = digits.length-1
    if( digits[length] === 9){
        if(length === 0){
            digits[0] = 0
            digits.unshift(1)
        }else{
            let index = length
            while(index >= 0){
                if(digits[index] === 9){
                    digits[index] = 0
                    digits[index-1] += 1
                    if(digits[index-1] < 10){
                        break
                    }
                }else if(digits[index] === 10 && index !== 0){
                    digits[index] = 0
                    digits[index-1] += 1
                    if(digits[index-1] < 10){
                        break
                    }
                }else if(digits[index] === 10 && index === 0){
                    digits[index] = 0
                    digits.unshift(1)
                }else{
                    break
                }
                index--
            }
        }
        
    }else{
        digits[length] =  digits[length]+1
    }
  
    
    return digits
};

console.log(plusOne([8,9,9,9]))