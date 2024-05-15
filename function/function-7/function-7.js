// let dispTotal = (x, y) => {
//   return x + y;
// };

// let result = dispTotal(3, 4);
// console.log(result);

let dispTotal = (x, y) => x + y;
let result = dispTotal(7, 2);
console.log(result);

function dispNum(x, y, func){
  console.log(func(x, y));
};

dispNum(7, 3, (x, y) => (x + y) / 2);