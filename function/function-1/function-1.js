function dispMessage(msg){
  console.log(msg);
}

function dispHello(){
  console.log('Hello');
  console.log('Javascript');
}

dispHello();

function dispTotal(x, y){
  let sum = x + y;
  return sum;
}

let result = dispTotal(3, 4);
console.log(result);

result = dispTotal(7, 1);
console.log(result);