/*
Take each character, get its pair, and return the results as a 2d array. (https://en.wikipedia.org/wiki/Base_pair)
*/
function pairElement(str) {
    
    var strArr = str.split(''), strand = [];
    var dnaBasePairs = [
        ['A','T','C','G','A','T','T','G','A','G','C','T','C','T','A','G','C','G'],
        ['T','A','G','C','T','A','A','C','T','C','G','A','G','A','T','C','G','C']
    ];
    
    for(var i=0;i<strArr.length;i++){
        strand.push([strArr[i],dnaBasePairs[1][dnaBasePairs[0].indexOf(strArr[i])]]);
    }
    
    return strand;
}

pairElement("TTGAG");