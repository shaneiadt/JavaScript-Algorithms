function confirmEnding(str, target) {
    var newStr = str.toLowerCase();
    newStr = newStr.replace(/\s/g,'');
    var regex = new RegExp(target + "$");
    return Array.isArray(newStr.match(regex));
}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");