/*
Find the length of the longest word in a sentence & return that length.
*/

function findLongestWord(str) {
    var strArr = str.split(' ');
    var longestStr = '';
    for(var i=0;i<strArr.length;i++){
        longestStr = (strArr[i].length > longestStr.length)?strArr[i]:longestStr;
    }
    return longestStr.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
