/*
Find & Replace a string while preserving capitalization.
*/
function myReplace(str, before, after) {
    
    var strArr = str.split(' ');
    
    for(var i=0;i<strArr.length;i++){
        if(before===strArr[i]){
            strArr[i] = (/[A-Z]/.test( strArr[i]))?after[0].toUpperCase()+after.split('').splice(1).join(''):after;
        }
    }
    str = strArr.join(' ');
    
    return str;
}

myReplace("Let us go to the store", "store", "mall");