const number = Math.floor(Math.random() * 1000);
const repeatString = function(string,num) {
  var finalString ="";
  var i=0;
  
  if(num==0 || num>0){
  while  (i<num){
    finalString+=string;
    ++i;}
 
  return finalString;}
  else if (num<0){
    return "ERROR";
  }
  };
  
  
  console.log(repeatString("hey",-1));

// Do not edit below this line
module.exports = repeatString;
