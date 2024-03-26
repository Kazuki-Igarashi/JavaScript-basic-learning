let old = 28;

if (old > 20 && old < 30){
  console.log('対象年齢です');
}else{
  console.log('対象年齢ではありません');
}

let x = 10;
// console.log(x > 20 && x < 40);
// >> false

// console.log(null && x < 40);
// >> null

let x1 = 30;
// console.log(x1 > 20 && x < 40);
// >> true

let x2 = 10;
// 

let x3 = 84;
let y = 72;

// console.log(x3 > 80 || y > 80)
// >> true

let mail = 'user@example.com';
let user = '';

// console.log(mail || user)
// >> user@example.com

let x4 = 75;
let y2 = 72;

// console.log(x4 > 80 || y2 > 80)
// >> false

let mail1 = '';
let user1 = 'user';

// console.log(mail1 || user1)
// >> user

let x5 = 75;

// console.log(!(x5 > 80))
// >> true