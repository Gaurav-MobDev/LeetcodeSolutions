var canConstruct = function(ransomNote, magazine) {
    let magazineMap = {}
    let ransomNoteMap = {}
    for(let char of magazine){
        if(magazineMap[`${char}`]){
            magazineMap[`${char}`] += 1
        }else{
            magazineMap[`${char}`] = 1
        }
    }

    for(let char of ransomNote){
        if(ransomNoteMap[`${char}`]){
            ransomNoteMap[`${char}`] += 1
        }else{
            ransomNoteMap[`${char}`] = 1
        }
    }
    let can = true
    for(let char of ransomNote){
        if(!magazineMap[`${char}`]  ||(magazineMap[`${char}`] &&  magazineMap[`${char}`] < ransomNoteMap[`${char}`])){
           can = false
        }
    }
    console.log(JSON.stringify(magazineMap))
    console.log(JSON.stringify(ransomNoteMap))
    console.log(can)
};

let ransomNote = "bg", magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"
canConstruct(ransomNote, magazine)