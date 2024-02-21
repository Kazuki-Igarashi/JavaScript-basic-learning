# 値が有限でかつ数値型であるかどうかを調べる(Number.isFinite)
Number オブジェクトの静的メソッドである Number.isFinite は、対象の値が有限かつ値が数値型かどうかを調べ、 true または false を返します。

## 値が有限かつ数値型がどうかを調べる(isFinite)
Number オブジェクトの Number.isFinite メソッドは、対象の値が有限かつデータ型が数値型かどうかを調べて true または false を返します。書式は次の通りです。

### Number.isFinite(値)

引数に指定した値が有限の値かどうかを調べます。値が NaN 、正の無限大( Infinity )、負の無限大( -Infinity )であれば false 、それ以外は true を返します。値が数値型ではない場合はすべて false となります。
無限大ではない数値は有限数です。
値が数値型でない場合はすべて false となります。

## isFinite関数とNumber.isFiniteメソッドの違い
グローバル関数の isFinite 関数と、 Number オブジェクトの Number.isFinite メソッドはどちらも対象の値が有限かどうかを調べるのに使いますが、 isFinite 関数が引数が数値型でなかった場合に数値型に変換してから有限かどうか判定するのに対して、 Number.isFinite メソッドは引数が数値型でなかった場合はすべて false とする点が異なります。

有限の数値はいずれでも true 、無限の値を表す Infinity はいずれでも false となりますが、グローバル関数の isFinite メソッドではそれ以外の値でも true となる場合があります。厳密に数値型の有限の値かどうかを判別するには Number.isFinite メソッドを使用してください。