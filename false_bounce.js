/*
Filter the provided array removing all values such as (0,false,undefined,NaN,null,"")
*/

function bouncer(arr) {
    var filtered = arr.filter(function(v){
        return (v!== 0 && v!==false && v!==undefined && v!==null && !Number.isNaN(v) && v!=='')?true:false;
    });
    return filtered;
}

console.log(bouncer([7, "ate", "", false, 9]));