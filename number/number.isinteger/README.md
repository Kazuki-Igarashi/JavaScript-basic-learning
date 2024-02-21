# 値が整数かどうかを調べる(Number.isInteger, Number.isSafeInteger)
Number オブジェクトの静的メソッドである Number.isInteger は、対象の値が整数かかどうかを調べ true または false を返します。また Number.isSafeInteger は、対象の値が安全な整数かどうかを調べ true または false を返します。

## 整数がどうかを調べる(isInteger)
Number オブジェクトの Number.isInteger メソッドは、対象の値が整数かどうかを調べて true または false を返します。書式は次の通りです。

### Number.isInteger(値)

引数に指定した値が整数かどうかを調べます。値が整数であれば true 、それ以外は false を返します。値が数値型ではない場合はすべて false となります。
整数については true 、 浮動小数点数については false 、 NaN や Infinity も false となります。
値が数値型でない場合はすべて false となります。

## 安全な整数がどうかを調べる(isSafeInteger)
Number オブジェクトの Number.isSafeInteger メソッドは、対象の値が安全な整数かどうかを調べて true または false を返します。書式は次の通りです。

### Number.isSafeInteger(値)

引数に指定した値が安全な整数かどうかを調べます。値が安全な整数であれば true 、それ以外は false を返します。値が数値型ではない場合はすべて false となります。