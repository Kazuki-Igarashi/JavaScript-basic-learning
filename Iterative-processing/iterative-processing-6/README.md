# break文の使い方
break 文を使うと break 文が記述されている一番内側の繰り返し処理を途中で終了し、次の文へ処理へ移すことができます。ここでは JavaScript で break 文を使う方法について。

## break文の使い方
break 文が実行されると、 break 文が記述されている最も内側の繰り返し処理が終了し次の処理へ移ります。書式は次の通りです。

### break;
break 文の対象となるのは for 文、 while 文、 do...while 文、 for...in 文、 for...of 文、 switch 文です。

変数 num の値を順に 2 倍しながら数値をコンソールに出力しています。繰り返す回数は 10 回にしていますが、変数 num の値が 10 を超えた場合はその時点で繰り返し処理を終了させて for 文の次の処理へ移っています。
let num = 1;

for (let i = 0; i < 10; i++){
  console.log(num);
  num *= 2;
  if (num > 10){
    console.log('10を超えたので繰り返し処理を抜けます')
    break;
  }
}

break 文が記述されている最も内側のブロックは if 文ですが、 if 文は break 文の対象ではないためその外側の for 文のブロックを抜けています。

今度は while 文の中で break 文を使用してみます。下記では while 文の条件式が true となっているので、このままでは while 文が無限ループとなってしまいますが、乱数で出た数値が 6 だった場合には break 文が実行されて while 文の次へ処理が移ります。

while(true){
  let dice = Math.floor(Math.random() * 6) + 1;
  console.log(dice);
  if (dice == 6){
    break;
  }
}

console.log('end');