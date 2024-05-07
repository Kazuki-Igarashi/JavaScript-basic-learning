function square(num){
  num = num * num;
  console.log(num);
}

let num = 10;
square(num);

console.log(num)

function Square(num1){
  for (let i = 0; i < num1.length; i++){
    num1[i] = num1[i] * num1[i];
  }
  console.log(num1);

}

let num1 = [10, 15, 20, 25];
Square(num1);

console.log(num1);