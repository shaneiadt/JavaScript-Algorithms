function confirmEnding(str, target) {
    var newStr = str.replace(/\s/g,'').toLowerCase();
    var regex = new RegExp(target + "$");
    return Array.isArray(newStr.match(regex));
}

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "zen"));
