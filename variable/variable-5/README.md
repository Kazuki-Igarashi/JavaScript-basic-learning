# 変数の値が未定義値(undefined)か判定する
JavaScript では変数を宣言したあとで値を一度も格納していない場合は未定義値 undefined が格納されています。

## 宣言した変数に格納されている値
変数を利用する場合は変数を宣言してから値を代入します。変数を宣言だけして値を一度も代入していない場合、変数には未定義値( undefined )という特殊な値が格納されています。
この undefined というのは文字列ではありません。そのため、変数に格納されている値が undefined かどうかを判定するために次のように行うことはできません。

let num;
if (num === 'undefined'){
  console.log('undefined');
}else{
  console.log('not undefined');
}

>> not undefined

## グローバル変数undefinedと比較する
JavaScript では undefined という名前のグローバル変数が定義されています。そして undefined には初期値としてプリミティブ値である undefined が格納されています。
グローバル変数 undefined に新しい値を格納することができないので、常に undefined が格納されています。

undefined = 'Yes';
console.log(undefined);
>> undefined
変数に格納されている値が未定義値かどうかを判定するには、グローバル変数 undefined と比較することで判定することができます。

## typeof演算子を使用する
typeof 演算子は引数を 1 つ取る演算子で引数のデータ型を表す文字列を返します。

未定義値が格納されている変数を typeof 演算子の引数として指定した場合、 'undefined' が返されます。

let num;
console.log(typeof num);
>> undefined
typeof 演算子の戻り値は文字列なので、文字列 'undefined' と比較することで変数に格納されている値が未定義値かどうかを判定することができます。