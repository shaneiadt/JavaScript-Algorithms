function repeatStringNumTimes(str, num) {
    var newStr = "";
    if(num >=1){
        for(var i=0;i<num;i++){
            newStr += str;
        }
    }
    return newStr;
}

console.log(repeatStringNumTimes("abc", 3));