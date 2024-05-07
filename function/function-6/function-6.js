function calcTotal(x, y) {
  return x + y;
}

console.log(calcTotal)

let myFunc = calcTotal;
console.log(myFunc(10, 8));

calcTotal = 'Hello';
console.log(calcTotal);