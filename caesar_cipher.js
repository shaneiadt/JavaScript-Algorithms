/*
Casesar Cipher ROT13 https://en.wikipedia.org/wiki/ROT13
*/

function rot13(str) {
    var betUnscrambled = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), betScrambled = 'NOPQRSTUVWXYZABCDEFGHIJKLM'.split('');
    str = str.split('');
    var newStr = "";
    for(var i=0;i<str.length;i++){
        newStr += (betScrambled.indexOf(str[i])!==-1)?betUnscrambled[betScrambled.indexOf(str[i])]:str[i];
    }
    return newStr;
}

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); //The Quick Brown Fox Jumped Over The Lazy Dog.
