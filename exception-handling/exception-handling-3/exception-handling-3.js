function sum(a, b){
  let sum;
  sum = a + b;

  return sum;
}

console.log('Start');

try{
  console.log(sum(10, 8));
  console.log(sum(10, 8n));
} catch(e) {
  console.error(e);
}

console.log('End');

function sumB(a, b){
  let sum;
  sum = a + b;

  return sum;
}

function sumA(a, b){
  return sumB(a, b);
}

console.log('Start');

try{
  console.log(sumA(10, 8));
  console.log(sumA(10, 8n));
} catch(e) {
  console.error(e);
}

console.log('End');

// console.log('Start');
// setTimeout(function sum(a, b) {
//   let sum = a + b;
//   console.log(sum);
// }, 1000, 10, 8);

// console.log('End');

console.log('Start');
try{setTimeout(function sum(a, b) {
  let sum = a + b;
  console.log(sum);
}, 1000, 10, 8n);
}catch(e){
  console.log('例外をキャッチしました。');
}
console.log('End');