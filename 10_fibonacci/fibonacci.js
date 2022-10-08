const fibonacci = function(memberTh) {
 const arr= [];
 arr[0]= 1;
 arr[1]= 1;
 memberIndex = memberTh-1;
 if (memberTh<0){return "OOPS"
}else{
 for(i=2; i<=memberIndex; i++){
 
 arr[i]= arr[i-2]+arr[i-1];

 //arr[2]= arr[0]+arr[1];
 //arr[3]= arr[1]+arr[2];
//arr[4]= arr[2]+arr[3];
 //arr[5]= arr[3]+arr[4];
 //arr[6]= arr[4]+arr[5];
}
 return arr[memberIndex];
}};


// Do not edit below this line
module.exports = fibonacci;
