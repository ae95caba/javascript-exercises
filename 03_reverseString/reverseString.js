
const reverseString = function(string) {
    var reversedString="";
    
    

    
    
    for (var i=1 ; i<=string.length ; ++i){
        
        var currentLetter=string.charAt(string.length-i);
        reversedString+= currentLetter;
        
    }
    
    return reversedString;
    

};


// Do not edit below this line
module.exports = reverseString;
