var fullJustify = function(words, maxWidth) {
    let currentWidth = 0
    let string = ''
    let para = []
    for(let index =0;index < words.length;index++){
        if(currentWidth + words[index].split('').length <= maxWidth){
            string = string + words[index] + ' '
            currentWidth = currentWidth + words[index].split('').length + 1
        }else{
            index--
            para.push(string.trim(''))
            string = ''
            currentWidth = 0
        }
    }
    para.push(string.trim(''))
    console.log(JSON.stringify(para))
    for(let index = 0;index < para.length;index++){
        let splitString = para[index].split('')
        let spaceSplitString = para[index].split(' ')
        let extraSpaces = maxWidth%splitString.length
        let evenlySpaces = Math.floor(extraSpaces/(spaceSplitString.length-1 > 0 ?spaceSplitString.length-1  : 1))
        let spacesAdded = evenlySpaces
        if(index == para.length-1){
            for(let index = 0;index <spaceSplitString.length;index++){
                if(index == spaceSplitString.length-1){
                    spaceSplitString[index] =  spaceSplitString[index] +  ' '.repeat(spacesAdded);
                }
            }
            para[index] = spaceSplitString.join('')
        }else{
            if(spaceSplitString.length === 1){
                para[index] =  para[index] + ' '.repeat(spacesAdded);
                spaceSplitString =  para[index]
            }else{
                for(let index = 0;index <spaceSplitString.length-1;index++){
                    spaceSplitString[index] =  spaceSplitString[index]+' '.repeat(spacesAdded);
                    spacesAdded = extraSpaces - spacesAdded
                }
                para[index] = spaceSplitString.join('')
            }
        }
    }
    console.log(para)
};

fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],20)