var strStr = function(haystack, needle) {
    let firstIndex = -1
    for(let index = 0; index <haystack.length;index++){
        let copy = haystack
        let sliceString = copy.slice(index,index+ needle.length)
        if(sliceString === needle){
            firstIndex =  index
            break;
        }
    }
    console.log(firstIndex)
    return firstIndex
};

let haystack = "sadbutwho"
let needle = "s"
strStr(haystack, needle)