const add = function(a,b) {
  {return a+b;
  };
  
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total,current)=>total+current,0);
};

const multiply = function(array) {
  return array.reduce((total,current)=>total* current,1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(number) {
	const arr = []
  //arr[number-1]= number;
  for(let i = number; i>= 0; i--){
    arr[i-1]= number-(number-i);
  };
  return arr.reduce((total,current)=>total* current,1);

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
