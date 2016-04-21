/*
Sum the range of two numbers.
*/
function sumAll(arr) {
    var max = Math.max(arr[0],arr[1]), min = Math.min(arr[0],arr[1]), sum = min;
    while(min<=max){sum += min++;}
    return sum-Math.min(arr[0],arr[1]);
}

sumAll([10, 5]);