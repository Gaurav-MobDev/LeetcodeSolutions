var simplifyPath = function(path) {
    for(let index = 0; index < path.length; index++){
        if(index === path.length -1 && path[index] === '/'){
            path.pop()
        }
        if(index > 0 && path[index] === '/' && path[index-1] === '/'){
            path.splice(0,index)
        }
    }
};