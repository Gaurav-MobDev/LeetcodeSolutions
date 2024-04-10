function longestCommonSubSequence(s1, s2){
    let len1 = s1.length;
    let len2 = s2.length;
    let last = 0
    let count = 0
let lengths = []
    if(len1 > len2){
        for(let i = 0 ;i<len1;i++){
            let j;
            for(j = last ;j<len2;j++){
                if(s1[i] === s2[j]){
                    count++
                    last = j+1
                    break
                }
            }
            if(i<len1 && j >= len2){
                lengths.push(count)
                last = 0
                count = 0
            }
        }
        console.log(count)

    }else if(len1 < len2){
        for(let i = 0 ;i<len2;i++){
            let j
            for(j = last ;j<len1;j++){
                if(s2[i] === s1[j]){
                    count++
                    last = j+1
                    break
                }
            }
            if(i<len2 && j >= len1){
                lengths.push(count)
                last = 0
                count = 0
            }
        }
        console.log(count)

    }else{

        for(let i = 0 ;i<len2;i++){
            let j
            for( j = last ;j<len1;j++){
                if(s2[i] === s1[j]){
                    count++
                    last = j+1
                    break
                }
            }
            if(i<len2 && j >= len1){
                lengths.push(count)
                last = 0
                count = 0
            }
        }
         last = 0
        let oldCount = count
        count = 0
        for(let i = 0 ;i<len1;i++){
            let j
            for(j = last ;j<len2;j++){
                if(s1[i] === s2[j]){
                    count++
                    last = j+1
                    break
                }
            }
            if(i<len1 && j >= len2){
                lengths.push(count)
                last = 0
                count = 0
            }
        }
        console.log(Math.max(oldCount, count))
    }
    let max = -Infinity
    for(let i =0;i<lengths.length;i++){
        if(lengths[i] > max){
            max = lengths[i]
        }
    }
    console.log(max)
}

const s1 = "ezupkr";
const s2 = "ubmrapg";
longestCommonSubSequence(s1, s2)