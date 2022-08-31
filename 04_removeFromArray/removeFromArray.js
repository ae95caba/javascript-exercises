const removeFromArray = function(array,position) {
    //turns arguemtens array into a real array
    
    const args = Array.prototype.slice.call(arguments);
    
    //creates an array with only the positions parameters, that way i can sort them in descening order
    //so i can start removing form the higher position that can pass the if "test", that way
    // i can remove every position starting from the starter parameter array, no matter the order of removal

    var arrayPositions = args.slice(1);
    arrayPositions.sort();
    arrayPositions.reverse();
    
    //this for makes i turn into every position parameter
    for (i=0;i<arrayPositions.length;i++ ) {    
        //if the current parameter (i) is a position that exists do  
        if (arrayPositions[i]>=0 && arrayPositions[i]<=array.length){

            
            //remove that position from the array parameter
            array.splice((arrayPositions[i]-1),1);
            
            }
        }   

    return array;
    
};
// Do not edit below this line
module.exports = removeFromArray;
