function checkResult(point){
  try{
    if(point < 50){
      throw '不合格です。';
    }
    console.log('得点' + point);
    console.log('合格です。');
  }catch(e){
    console.error(e);
  }
}

console.log('Start');

console.log(checkResult(82));
console.log(checkResult(40));

console.log('End');