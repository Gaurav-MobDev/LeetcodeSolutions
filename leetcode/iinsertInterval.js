var insert = function(intervals, newInterval) {
    let i = [...intervals]
    let n = [...newInterval]
    let overlaped = false
    for(let index = 0 ; index < i.length; index++){
       if(n[0] > i[index][0] && n[0] < i[index][1] && n[1] > i[index][1]){
        i[index][1] = n[1]
        n = i[index]
        overlaped = true
       }
       if(i[index][0] >= n[0] && i[index][1] <= n[1] && i[index][0] < n[1] && i[index][1] > n[0]){
        i[index][0] = n[0]
        i[index][1] = n[1]
        n = i[index]
        overlaped = true
       }
       if(i[index][0] > n[0] && i[index][0] < n[1] && i[index][1] > n[1]){
        i[index][0] = n[0]
        n = i[index]
        overlaped = true
       }
       if(i[index][1] === n[0]){
        i[index][1] = n[1]
        n = i[index]
        overlaped = true
       }
       if(i[index][0] === n[1]){
        i[index][0] = n[0]
        n = i[index]
        overlaped = true
       }
       if(n[0] > i[index][0] && n[1] < i[index][1]){
        overlaped = true
       }
       if (index< i.length-1 && n[0] > i[index][1] && n[1] < i[index + 1][0]) {
        i.splice(index+1,0,n)
        overlaped = true
        break
       }
    }
if(!overlaped && n[0] > i[i.length-1][1]){
    i.push(newInterval)
}
if(!overlaped && n[1] < i[0][0]){
    i.unshift(newInterval)
}
    for(let index = 1 ; index < i.length; index++){
        if(i[index-1][0] === i[index][0] && i[index-1][1] === i[index][1]){
            i.splice(index-1, 1)
            index--
        }
        else if(i[index-1][0] === i[index][0] && i[index-1][1] !== i[index][1]){
            i.splice(index-1, 1)
            index--
        }
    }
    console.log(JSON.stringify(i))
};

let intervals =[[0,2],[3,9]], newInterval = [6,8]
//intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
insert(intervals, newInterval)