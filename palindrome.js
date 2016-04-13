function palindrome(str) {
  var tempStr = str;
  return (str.replace(/[\W_]+/g, '').split('').reverse().join('').toLowerCase()===tempStr.replace(/[\W_]+/g,'').toLowerCase())?true:false;
}


palindrome("A man, a plan, a canal. Panama");