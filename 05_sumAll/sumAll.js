const sumAll = function(par1, par2) {
    if(par1<0 || par2<0||typeof par1 != "number"||typeof par2 != "number"){
        return "ERROR";
    }
    var sum = 0;
    if(par1<par2){
        for (let i = par1; i<=par2;i++){
        sum+=i;
        }
        return sum;
    }

    if(par2<par1){
        for(let i=par2; i<=par1; i++){
        sum+=i;
        }
        return sum;
    }
}
// Do not edit below this line
module.exports = sumAll;
