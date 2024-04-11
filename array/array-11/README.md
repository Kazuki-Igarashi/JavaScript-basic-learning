# 配列と配列を結合する
Array オブジェクトの concat メソッドを使用すると配列に別の配列を結合することができます。

## concatメソッドを使った配列の結合
Array オブジェクトの concat メソッドを使うと配列に対して別の配列を結合した新しい配列を取得することができます。
書式は次の通りです。

### 配列名.concat(配列)
### 配列名.concat(配列, 配列, ...)
### 配列名.concat(値, 値, ...)
配列の最後に引数に指定した配列を結合した新しい配列を返します。
引数は省略可能で結合する配列または値を指定し、複数の配列を結合する場合はカンマ(,)のあとに続けて記載してください。

## concatメソッドを使った配列のコピー
concat メソッドの引数を省略した場合は元の配列を複製したものを戻り値として返します。

 >let fruit = ['Apple', 'Melon', 'Orange'];
 >let copyFruit = fruit.concat();

 >console.log(fruit);
 > ["Apple", "Melon", "Orange"]
 
 >console.log(copyFruit);
 > ["Apple", "Melon", "Orange"]
複製された配列は元の配列は別の配列オブジェクトとなります。その為、複製した配列に変更を加えても元の配列には影響しません(逆も同じです)。

 >let fruit = ['Apple', 'Melon', 'Orange'];
 >let copyFruit = fruit.concat();
 
 >copyFruit[1] = 'Grapes';
 >console.log(copyFruit);
 > ["Apple", "Grapes", "Orange"]
 
 >console.log(fruit);
 > ["Apple", "Melon", "Orange"]

 concata メソッドが複製するのは 1 次元の要素までです。元の配列の要素の値として配列が格納されていた場合、その要素が参照する配列は複製された配列の要素も同じ配列を参照します。