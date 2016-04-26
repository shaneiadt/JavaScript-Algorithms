/*
Find missing letter in alphabhetic sequence
*/
function fearNotLetter(str) {
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    if(Array.isArray(alpha.match(new RegExp(str)))){
        //No missing letters in sequence return 'undefined'
        str = undefined;
    }else{
        //Find missing letter in sequence
        var strArr = str.split(''), alphaArr = alpha.split(''), cnt = 0;
        
        for(var i=alpha.indexOf(str[0]);i<alphaArr.length;i++){
            if(strArr[cnt] !== alphaArr[i]){
                //Missing letter found return
                str = alphaArr[i];
                break;
            }
            cnt++;
        }
    }
    
    return str;

}

fearNotLetter("abce");