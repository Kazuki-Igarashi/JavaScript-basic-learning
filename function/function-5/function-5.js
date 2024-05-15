// function maxAndmin(num1, num2, num3, num4, num5){
//   const maxNum = Math.max(num1, num2, num3, num4, num5);
//   const minNum = Math.min(num1, num2, num3, num4, num5);

//   return [maxNum, minNum];
// }

// let numArray = maxAndmin(10, 7, 14, 25, 5);

// console.log("Max = " + numArray[0]);
// console.log("Min = " + numArray[1]);

function maxAndMin(num1, num2, num3){
  const maxNum = Math.max(num1, num2, num3);
  const minNum = Math.min(num1, num2, num3);

  return [maxNum, minNum];
}

let [maxResult, minResult] = maxAndMin(10, 7, 14);

console.log("Max = " + maxResult);
console.log("Min = " + minResult);