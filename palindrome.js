/*
Is the provided String a 'palindrome' after removing all non-aplhanumeric characters & spaces? If 'yes' return true, if 'no' return false.

NOTE: A palindrome is a word that is the same forward & backward.

*/

function palindrome(str) {
  var tempStr = str;
  return (str.replace(/[\W_]+/g, '').split('').reverse().join('').toLowerCase()===tempStr.replace(/[\W_]+/g,'').toLowerCase())?true:false;
}


palindrome("A man, a plan, a canal. Panama");
