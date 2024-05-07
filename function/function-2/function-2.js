function dispMessage(msg){
  console.log(msg);
}

dispMessage('Hello');

dispMessage(100);

function dispProfile(name, old){
  console.log('name : ' + name);
  console.log('old : ' + old);
}

dispProfile('Yamada', 24);

dispProfile('Suzuki', 38, 'Kyoto');

function OrderPrice(price, count=10){
  console.log('Total = ' + (price * count));
}

OrderPrice(80, 14);

OrderPrice(120);

function calcSum(...num){
  let sum = 0;
  for (let i = 0 ; i < num.length ; i++){
    sum += num[i];
  }

  return sum;
}

calcSum(1, 2, 3);

calcSum(1, 2, 3, 4, 5);