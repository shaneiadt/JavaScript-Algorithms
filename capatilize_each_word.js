/*
Return a string where all words are capatilized.
*/

function titleCase(str) {
  return str.replace(/\w\S*/g, function(ts) { return ts.charAt(0).toUpperCase() + ts.substr(1).toLowerCase(); });
}

titleCase("I'm a little tea pot");
