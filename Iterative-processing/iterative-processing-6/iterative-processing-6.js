let num = 1;
for (let i = 0; i < 10; i++){
  console.log(num);
  num *= 2;
  if (num > 10){
    console.log('10を超えたので繰り返し処理を抜けます')
    break;
  }
}

console.log('end')

while(true){
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  if (dice == 6){
    break;
  }
}
console.log('end')