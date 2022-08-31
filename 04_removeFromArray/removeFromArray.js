const removeFromArray = function(array,position1,position2) {
            
    if (position1>=0 && position1<=array.length){
        array.splice((position1-1),1);
    }
    if (position2>=0 && position2<=array.length){
        array.splice((position2-1),1);
    }
        return array;
};

// Do not edit below this line
module.exports = removeFromArray;
