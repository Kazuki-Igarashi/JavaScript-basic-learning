# 数値を指定の基数の形式で文字列に変換する(toString)
Number オブジェクトのインスタンスメソッドである toString は、数値を指定の基数( 2 進数なら 2 、 16 進数なら 16 )で表した文字列を取得することができます。

## 指定の基数の形式で文字列に変換する(toString)
Number オブジェクトの toString メソッドは、対象の数値を指定した基数の形式で表した文字列を返します。書式は次のとおりです。

数値.toString([基数])

数値を 2 進数であらわした文字列を取得するには基数に 2 を、数値を 16 進数であらわした文字列を取得するには基数に 16 を指定してください。指定可能な値は 2 から 36 までです。基数は省略可能でデフォルトの値は 10 です。

基数の範囲を超える値を指定した場合は RangeError エラーが発生します。

console.log((78).toString(40));
>> Uncaught RangeError: toString() radix argument must be between 2 and 36

なお整数の数値に対して直接 toString メソッドを実行する場合は、数値を括弧で囲うか数値のあとに空白を追加してください。

console.log(48.toString(2));
>> Uncaught SyntaxError: Invalid or unexpected token

console.log((48).toString(2)); // 数値を括弧で囲う
>> 110000

console.log(48 .toString(2)); // 数値のあとに空白を入れる
>> 110000
