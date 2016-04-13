function largestOfFour(arr) {
    var largestNumbersArr = [];
    var largestNum = 1;
    for(var i=0;i<arr.length;i++){
        largestNum = 1;
        for(var j=0;j< arr[i].length;j++){
            largestNum = (arr[i][j] > largestNum)?arr[i][j]:largestNum;
        }
        largestNumbersArr[i] = largestNum;
    }
    return largestNumbersArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
