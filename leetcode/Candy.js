var candy = function(ratings) {
    let candies = ratings.map(item => {
        return 1
    });
    console.log(JSON.stringify(candies))
    for(let index = 1; index< ratings.length; index++){
        if(ratings[index]<=ratings[index-1]){
            if(index !== ratings.length-1){
                let subindex = index
                while(ratings[subindex] < ratings[subindex-1]){
                 candies[subindex-1] = candies[subindex-1] + 1
                 subindex = subindex - 1
                }
            }
        } else{
            candies[index] = candies[index-1] + 1
        }
    }
    console.log(JSON.stringify(candies))
    let total = 0
    for(let index = 0; index< candies.length; index++){
        total = total+candies[index]
    }
    console.log(total)
    return total
};
candy([1,2,87,87,87,2,1])