function BringSingara(money) {
    var SingaraPrice = 10;
    var Quantity = money / SingaraPrice;
    return Quantity;
    
}
var tkDilam = 500;
var Singaras = BringSingara(tkDilam);
console.log('total singara pelam:',Singaras);