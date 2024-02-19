# 値がNaNかつ数値型であるかどうかを調べる(Number.isNaN)
Number オブジェクトの静的メソッドである Number.isNaN は、対象の値が NaN (Not a Number) かつ値が数値型かどうかを調べ、 true または false を返します。

## 値がNaNかつ数値型がどうかを調べる(isNaN)
Number オブジェクトの Number.isNaN メソッドは、対象の値が NaN かつデータ型が数値型かどうかを調べて true または false を返します。書式は次の通りです。

### Number.isNaN(値)

引数に指定した値が NaN で、かつ数値型かどうかを調べます。値が数値型ではない場合はすべて false となります。

※ NaN とはグローバルオブジェクトのプロパティのひとつで非数( Not A Number )を表します。 Number オブジェクトで用意されている Number.NAN も同じです。

NaN は特殊な値で、等価演算子である == や === で NaN 自身と等しいかどうか調べても false となるため等価演算子で NaN かどうかを調べることはできません。そのため Number.isNaN メソッドを使います。

Number オブジェクトの Number.isNaN メソッドでは対象の値を数値型には変換しません。数値型以外の値はすべて false となります。

## isNaN関数とNumber.isNaNメソッドの違い(isNaN)
グローバル関数の isNaN 関数と、 Number オブジェクトの Number.isNaN メソッドはどちらも対象の値が NaN かどうかを調べるのに使いますが、 isNaN 関数が引数が数値型でなかった場合に数値型に変換してから NaN かどうか判定するのに対して、 Number.isNaN メソッドは引数が数値型でなかった場合はすべて false とする点が異なります。

NaN や 演算の結果 NaN となるような式についてはどちらでも true となりますが、グローバル関数の isNaN メソッドではそれ以外の値でも true となる場合があります。厳密に数値型の NaN かどうかを判別するには Number.isNaN メソッドを使用してください。