# or...in文を使った繰り返し処理
JavaScript で繰り返し処理を行う方法のひとつである for...in 文の使い方について。 for...in 文ではオブジェクトに含まれるプロパティ名を順に取得します。

## for...in文の基本書式
for...in 文ではオブジェクトに含まれるプロパティ名を順に取得ことができます。書式は次の通りです。

### for (変数名 in オブジェクト){
###   実行する文1;
###   実行する文2;
###   ...
### }
繰り返し実行する文が 1 つだけだった場合にはブロックを表す {} を省略することができます。

### for (変数名 in オブジェクト)
###   実行する文;

例えば次のようにオブジェクトリテラルを例に試してみます。

const fruit = {orange:170, apple:90, lemon:110};

for...in 文ではまずオブジェクトを評価します。
オブジェクトが null または undefined だった場合には for...in 文の次の処理へ移ります。それ以外だった場合にはオブジェクトからプロパティ名が変数に格納され、そのあとでブロック内の処理が実行されます。

const fruit = {orange:170, apple:90, lemon:110};

for (let i in fruit){
  console.log("fruit." + i + ' = ' + fruit[i]);
}

console.log('end');
>> fruit.orange = 170
>> fruit.apple = 90
>> fruit.lemon = 110
>> end

## for...in文を配列に対して使用する
for...in文はオブジェクトのひとつである配列に対しても使用することができます。配列の場合はプロパティ名ではなくインデックスを順に取得します。

const fruit = ['orange', 'apple', 'lemon'];

for (let i in fruit){
  console.log("fruit." + i + ' = ' + fruit[i]);
}

console.log('end');
>> fruit.0 = orange
>> fruit.1 = apple
>> fruit.2 = lemon
>> end
配列のインデックスを順に取得し繰り返し処理が行われています。