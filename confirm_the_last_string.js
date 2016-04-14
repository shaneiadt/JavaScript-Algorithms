/*
Search for the 'target' character string at the end of the 'str' variable.
*/

function confirmEnding(str, target) {
    var newStr = str.replace(/\s/g,'').toLowerCase();
    var regex = new RegExp(target + "$");
    return Array.isArray(newStr.match(regex));
}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "zen");
