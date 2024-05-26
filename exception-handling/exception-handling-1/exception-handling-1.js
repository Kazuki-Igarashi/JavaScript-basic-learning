// function sum (a, b){
//   let sum = a + b;
//   return sum;
// }

// console.log('Start');

// let result = sum(10, 8);
// console.log(result);

// console.log('End');

// function sum (a, b){
//   let sum = a + b;
//   return sum;
// }

// console.log('Start');

// let result = sum(10, 8n);
// console.log(result);

// console.log('End');

function sum(a, b){
  let sum;
  try{
    sum = a + b;
  }catch(e){
    console.error(e);
    return null;
  }
  return sum;
}

console.log('Start');
console.log(sum(10, 8));
console.log(sum(10, 8n));
console.log('End');