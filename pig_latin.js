/*
Convert string into Pig Latin (https://en.wikipedia.org/wiki/Pig_Latin)
*/
function translatePigLatin(str) {
    
    var vowels = ['a','e','i','o','u'], newStr = '', strArr = str.split('');
    
    if(vowels.indexOf(strArr[0])>=0){
        newStr = strArr.join('')+'way';
    }else{
        var tempCon = '';
        for(var i=0;i<strArr.length;i++){
            if(vowels.indexOf(strArr[i])===-1){
                tempCon += strArr[i];
                delete strArr[i];
            }else{
                newStr = strArr.join('')+tempCon+'ay';
                break;
            }
        }
    }
    
    return newStr;
}

translatePigLatin("glove");