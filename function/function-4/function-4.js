function calcArea(radius){
  const area = radius * radius * 3.14
  return area;
}

const area = calcArea(10);
console.log(area)

console.log(calcArea(8));

function calcFee(old){
  if (old < 20){
    console.log('20歳未満は利用できません');
    return;
  }

  if (old > 30){
    console.log('利用料は2,000円です。');
  }else{
    console.log('利用料は1,800円です');
  }
}

calcFee(31)
calcFee(25)
calcFee(18)

function checkNum(num){
  if (num % 2 === 0){
    console.log('偶数です。');
    return;
  }
  console.log('奇数です。');
}

let ret;
ret = checkNum(8);
console.log(ret);

ret = checkNum(5);
console.log(ret);