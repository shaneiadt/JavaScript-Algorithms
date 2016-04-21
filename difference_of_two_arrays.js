/*
Pop the difference between two arrays into a new array & return.
*/
function diffArray(arr1, arr2) {
    var newArr = [], longestArr = arr1, shortestArr = arr2;
    
    if(arr2.length>arr1.length){
        longestArr = arr2;
        shortestArr = arr1;
    }
    
    longestArr.filter(function(val){
        
        if(shortestArr.indexOf(val)===-1 && newArr.indexOf(val)===-1){
            newArr.push(val);
        }
        
        return;
    });
    
    shortestArr.filter(function(val){
        
        if(longestArr.indexOf(val)===-1 && newArr.indexOf(val)===-1){
            newArr.push(val);
        }
        
        return;
    });
    
    return newArr;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);