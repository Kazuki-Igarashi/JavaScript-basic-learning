let width = 62, height = 72;

var num;
num = 10;

var num;

let num1;
num1 = 10;
// let num1;

function test(num){
  if(num >= 20){
    var msg = '成人です';
  }else{
    var msg = '未成年です';
  }
  console.log(msg); // 同じ関数内で参照している
}

test(21);

function test(num){
  if (num >= 20){
    let msg = '成人です';
  }else{
    let msg = '未成年です';
  }

  console.log(msg); // 変数が宣言されたブロックの外で参照している
}

test(10);
>> Uncaught ReferenceError: msg is not defined