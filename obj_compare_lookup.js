/*
Search through an array of objects (collection) and return an array of all objects that have matching property and value pairs (source)
*/
function whereAreYou(collection, source) {
    var arr = [], newArr = [];
    
    for(var i=0;i<collection.length;i++){
        var tempCol = collection[i];
        var truthCounter = 0;
        
        for(k in tempCol){
            for(j in source){
                if(tempCol[k] === source[j] && k === j){
                    truthCounter++;
                }
            }
        }
        if(truthCounter>=Object.keys(source).length){
            newArr.push(tempCol);
        }
    }
    
    return newArr;
}

console.log(whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));