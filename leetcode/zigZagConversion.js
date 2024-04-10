var convert = function(s, numRows) {
    if(numRows === 1){
        console.log(s)

        return s
    }
    let length = s.length
    let index = 0;
    let subIndex = 0;
    let array = []
    let increase = true
    for(let i = 0;i<numRows;i++){
        array.push([])
    }
    while(index < length){
        array[subIndex].push(s[index])
        index++
       
        if(subIndex === numRows-1){
            increase = false
        }
        if(subIndex === 0){
            increase = true
        }
        if(increase){
            subIndex++
        }else{
            subIndex--
        }
        
    }
    let result = ''
    for(let i = 0;i<array.length;i++){
        for(let j = 0;j<array[i].length ;j++){
            result += array[i][j]
        }
    }
    console.log(result)
};
let s = "PAYPALISHIRING", numRows = 4
convert(s,numRows)