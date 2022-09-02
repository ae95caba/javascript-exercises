const ftoc = function(f) {
  exact = (f - 32) * (5/9);
  let rounded = Math.round(exact*10)/10;
  return rounded
  
};

const ctof = function(c) {
  let exact = c * 1.8 + 32;
  let rounded = Math.round(exact*10)/10;
  return rounded
}
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
