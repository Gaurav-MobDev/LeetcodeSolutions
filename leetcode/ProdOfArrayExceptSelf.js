var productExceptSelf = function(nums) {
    let prods = []
    let prod = 1
    let zeroesCOunt = 0;
    let zeroIndex;
    for(let index =0;index< nums.length;index++){
        if(nums[index] == 0){
            zeroesCOunt++;
            zeroIndex = index
            continue
        }
        prod = prod*(nums[index])
    }
    for(let index =0;index< nums.length;index++){
        if(zeroesCOunt == 1){
            if(index == zeroIndex){
                prods.push(prod)
            }else{
                prods.push(0)
            }
           
        }else if(zeroesCOunt > 1){
            prods.push(0)
        }
        else{
            prods.push(prod/nums[index])
        }
       
    }
    console.log(JSON.stringify(prods), prod)
};

productExceptSelf([1,2,3,4])