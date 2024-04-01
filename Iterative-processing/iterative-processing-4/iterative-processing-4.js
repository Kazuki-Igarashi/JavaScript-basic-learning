let num = 4;
do {
  console.log(num);
  num = num * 4;
}while(num < 100);

console.log('end');

let dice;
do {
  dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
}while (dice != 6);

console.log('end')