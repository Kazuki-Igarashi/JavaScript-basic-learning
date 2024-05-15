// const price = function(price){
//   console.log('トマトの値段は' + price + '円です。');
// }

// price(100);

function tomato(price, func){
  const name = 'トマト';
  func(price, name);
}

const price = function(price, name){
  console.log(name + 'の値段は' + price + '円です。');
}

tomato(100, price);

const dispBye = function(){
  console.log('Bye.');
}

console.log('Good Morning.')

setTimeout(dispBye, 5000);

console.log('How Are You?');