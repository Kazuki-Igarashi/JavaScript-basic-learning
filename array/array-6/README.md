# オブジェクトが配列かどうかを調べる(Array.isArray)
オブジェクトが配列かどうかを調べる方法について。 
Array オブジェクトの静的メソッドである Array.isArray メソッドを使用します。

## オブジェクトが配列かどうかを調べる(isArrayaメソッド)
オブジェクトが配列かどうかを調べるには、 Arraya オブジェクトの静的メソッドである Array.isArray メソッドを使用します。
書式は次の通りです。

### Array.isArray(オブジェクト);

オブジェクトが配列だった場合には true を返します。

## typeof演算子を使った場合
なお typeof 演算子では配列も Objectオブジェクトもどちらも object を返すため配列かどうかを調べることはできません。

 let result = [10, 42, 52];
 let user = {name:'Yamada', old:28};
  
 console.log(typeof result);
 >> object

 console.log(typeof user);
 >> object

配列かどうか調べる場合には Array.isArray メソッドを使用。