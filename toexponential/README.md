# 数値を指数形式で文字列に変換する(toExponential)
Number オブジェクトのインスタンスメソッドである toExponential は、数値を指数形式(例えば 1.52e10 のような形式です)で表した文字列を取得することができます。

## 指数形式で文字列に変換する(toExponential)
Number オブジェクトの toExponential メソッドは、対象の数値を指数形式で表した文字列を返します。書式は次のとおりです。

数値.toExponential([小数点の後の桁数])

数値を指数形式で表した文字列を返します。小数点数の前の桁は 1 、小数点の後の桁は引数で指定した数となります。引数を省略した場合は元の数値を表示するのに必要となる桁数となります。

引数で指定した桁数で表示しきれない部分はより近い値へ丸められます。(四捨五入に似ていますが正確には異なります)。

数値を表示するのに必要な数よりも多い数値を小数点の後の桁数に指定しても、 0 で埋められるようなことはありません。

なお整数のように小数点が含まれない数値に対して直接 toExponential メソッドを実行する場合は、数値を括弧で囲うか数値のあとに空白を追加してください。

console.log(48.toExponential(2));
>> Uncaught SyntaxError: Invalid or unexpected token

console.log((48).toExponential(2)); // 数値を括弧で囲う
>> 4.80e+1

console.log(48 .toExponential(2)); // 数値のあとに空白を入れる
>> 4.80e+1
