# 配列から要素を削除する
JavaScript の配列は要素数を変更することできますので、作成した配列から要素を削除することができます。

## popメソッドを使って配列の最後の要素を削除する
Array オブジェクトの pop メソッドを使うと配列の最後の要素を削除することができます。
書式は次の通りです。

### 列名.pop()

配列の最後の要素を削除し、その要素を戻り値として返します。
配列がもともとからだった場合は undefined を返します。

## shiftメソッドを使って配列の最初の要素を削除する
Array オブジェクトの unshift メソッドを使うと配列の先頭の要素を削除することができます。
書式は次の通りです。

### 配列名.shift()

配列の先頭の要素を削除し、その要素を戻り値として返します。配列がもともとからだった場合は undefined を返します。
削除された要素の次以降の要素についてはインデックスが一つずつ小さくなります。

## lengthプロパティを使って要素の数を減らす
Array オブジェクトの length プロパティを参照すると、配列の最後の要素のインデックスに +1 した値を取得することができます。
この length プロパティには値を代入すると、配列の最後の要素のインデックスが length プロパティの値から -1 した値となり、それ以降の要素は削除されます。

## 配列に空の配列を代入する
配列が代入されている変数に空の配列をあらためて代入することで、変数が参照する配列が新しい空の配列に代わります。
元々変数が参照していた配列の要素が空になったのではなく、新しい空の配列を参照しなおしている点に注意してください。

 >let fruit = ['apple', 'melon', 'peach', 'grapes'];
 >let fruit2 = fruit;

 >console.log(fruit);
 >> ["apple", "melon", "peach", "grapes"]
 >console.log(fruit2);
 >> ["apple", "melon", "peach", "grapes"]

 >fruit = [];

 >console.log(fruit);
 >> []
 >console.log(fruit2);
 >> ["apple", "melon", "peach", "grapes"]
 
変数 fruit には新しい空の配列が代入されましたが、元々参照していた配列は要素に変化がないため、同じ配列を参照していた変数 fruite2 が参照している配列は変わりがありません。