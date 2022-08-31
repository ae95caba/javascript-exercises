const removeFromArray = function(array,position) {
    for (i=1;i<arguments.length;i++ ) {      
        if (arguments[i]>=0 && arguments[i]<=array.length){
            
            array.splice((arguments[i]-1),1);
            
            }
        }   

    return array;
    
};

// Do not edit below this line
module.exports = removeFromArray;
