/*
Checks to see if all characters from both arrays match. If they do return 'true', if not return 'false'.
*/

function mutation(arr) {
    var arr1 = arr[0].toLowerCase().split(''), arr2 = arr[1].toLowerCase().split(''), truth = 0;
    for(var i=0;i<arr1.length;i++){
        for(var j=0;j<arr2.length;j++){
            if(arr1[i].indexOf(arr2[j])!=-1){truth++;}
        }
    }
    return (truth >= arr2.length)?true:false;
}

mutation(["hello", "hey"]);
