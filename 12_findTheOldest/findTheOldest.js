const findTheOldest = function(arrayOfPeople){
    var arr = arrayOfPeople.sort((b,a)=>{
    if(a.yearOfDeath ){
        var aAge= a.yearOfDeath-a.yearOfBirth;
        //console.log(`a es ${aAge}`);
    }else{
        var aAge=(new Date()).getFullYear() - a.yearOfBirth;
       // console.log(`a es ${aAge}`);
    };

    if(b.yearOfDeath ){
        var bAge= b.yearOfDeath-b.yearOfBirth;
        //console.log(`b es ${bAge}`);
    }else{
        var bAge=(new Date()).getFullYear() - b.yearOfBirth;
        //console.log(`b es ${bAge}`); 
    };
     
    //console.log(`a es major a b ${aAge>bAge}`) ;   
    return aAge > bAge ? 1 : -1;
    
});
    return arr[0];
}    

// Do not edit below this line
module.exports = findTheOldest;
