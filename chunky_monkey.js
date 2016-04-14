function chunk(arr, size) {  
  var tempArr = [], i = 0;
  while (i < arr.length) {tempArr.push(arr.slice(i, i += size));}
  return tempArr;
}
chunk(['a', 'b', 'c', 'd','e','f'], 3); 