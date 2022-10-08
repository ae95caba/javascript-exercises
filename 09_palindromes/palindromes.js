const palindromes = function (string) {
    allLower= string.toLowerCase();
    newString=[]
    reversedString=[]
    for(let i=0; i<allLower.length; i++){
        if( allLower.charAt(i) !== "!" && allLower.charAt(i) !== " " && allLower.charAt(i) !== "," && allLower.charAt(i) !== ".")
       newString.push(allLower.charAt(i)) ;
    }
    for(let i=allLower.length; i>0; i--){
        if( allLower.charAt(i-1) !== "!" && allLower.charAt(i-1) !== " " && allLower.charAt(i-1) !== "," && allLower.charAt(i-1) !== ".")
       reversedString.push(allLower.charAt(i-1)) ;
    }
    let checkEquality=  (newString.length == reversedString.length) && newString.every(function(element, index) {
        return element === reversedString[index];
    });
    return checkEquality;
    

};

// Do not edit below this line
module.exports = palindromes;
