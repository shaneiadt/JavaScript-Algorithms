/*
Find the lowest index for 'num' to be inserted into the sorted Array 'arr'.
*/

function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {return a - b;});
    var pos = 0;
    for(var i=0;i<arr.length;i++){
        if(num > arr[i]){
            pos++;
        }
    }
    return pos;
}

console.log(getIndexToIns([2, 5, 10], 15));
