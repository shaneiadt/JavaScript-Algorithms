/*
Filter the first argument passed to the 'destroyer' function by all following args.
*/

function destroyer(arr) {
    var filtered = arguments[0], objArr = [];
    delete arguments[0];
    
    //Convert Object Properties to an Array.
    for(var i=0;i<arguments.length;i++){
        if(arguments.hasOwnProperty(i)){
            objArr.push(arguments[i]);
        }
    }
    
    return filtered.filter(function(v){return (objArr.indexOf(v)!==-1)?false:true;});
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));