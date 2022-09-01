const removeFromArray = function(array,position) {
    //turns arguemtens array into a real array
  
    const args = Array.prototype.slice.call(arguments);
    
    //creates an array with only the positions parameters, that way i can sort them in descening order
    //so i can start removing form the higher position that can pass the if "test", that way
    // i can remove every position starting from the starter parameter array, no matter the order of removal

    var arrayPositions = args.slice(1);
    //-------------------------- 6
    
    // i do this since i could be any parameter including a string 
    //i will be all the parameters after the first
    for (i=0; i<arrayPositions.length; i++){
        
        if (typeof arrayPositions[i] === 'string' && array.indexOf(arrayPositions[i])+1){ // if a parameter is an string
            //and exists in the parameters array
            //I will remplace the string with its place number in the parameter's array
            //----PROBLEM: if is a string a doesnt exists it will remove a place in a array later
            
            arrayPositions[i]= array.indexOf(arrayPositions[i])+1; //finds the string parameter in the parameter's array using indexOf 
            //returning its number's place. --------- THEEE +1 IS NEEDED SO THE NEXT FOR CAN WORK ------------ . Finally that number is used to remplace such string
            // that way I can have an array(arrayPositions) that is only  numbers of positions so i can sort it later
            
            //-----short: transforms the string into its number's place in the parameter string----
        }

        if (typeof arrayPositions[i] === 'string' && ! array.indexOf(arrayPositions[i])+1){
            arrayPositions.splice(i,1);
        }
        
    }
    //--------------------------6
    arrayPositions.sort();
    arrayPositions.reverse();
    
    //this for makes i turn into every number's position parameter
    for (i=0;i<arrayPositions.length;i++ ) {   
        
        //if the current parameter (i) is a position that exists do  
        if (arrayPositions[i]>=0 && arrayPositions[i]<=array.length){

            
            //remove that position from the array parameter
            array.splice((arrayPositions[i]-1),1);
            
            }
    }   

    return array;
}
    
    




// Do not edit below this line
module.exports = removeFromArray;
