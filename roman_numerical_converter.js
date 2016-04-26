/*
Convert a decimal number into it's Roman Numerial equiv.
*/
function convertToRoman(num) {
  var romanNumerials = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    
  for(i in romanNumerials){
 
    while(num >= romanNumerials[i]){
        
      roman += i;
      num -= romanNumerials[i];
        
    }
      
  }
    
  return roman;
}

console.log(convertToRoman(99));