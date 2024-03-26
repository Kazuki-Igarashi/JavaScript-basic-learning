# 文字列を連結する
加算演算子(+)は文字列に対して使用すると文字列の連結として利用することができます。ここでは加算演算子を使って文字列を連結する方法について

## 文字列を連結する
算術演算子の一つである加算演算子(+)は 2 つの値がともに数値の場合には数値の加算として使用されますが、 1 つまたは 2 つがの値が文字列の場合には文字列の連結として使用されます。

1 つの値が文字列で、もう 1 つの値が文字列以外の場合には、文字列以外の値を文字列に変換した上で文字列連結します。
値の代わりに値が格納された変数を記述しても同じように文字列の連結が行われます。

## 文字列連結の順序
加算演算子(+)の結合規則は左ですので、式の中に複数の + 演算子が含まれる場合は左から順に連結が行われます。
let msg = 100 + 80 + '円です。';

console.log(msg);
>> 180円です。
このサンプルでは最初に 100 + 80 の演算が行われます。 2 つの値とも数値なので数値の加算が行われ 180 という結果となります。次に 180 + '円です。' の演算が行われます。 1 つが文字列のため文字列の連結が行われ、結果として変数には '180円です。' という文字列が代入されます。

少し値を変更します。
let msg = '値段は' + 100 + 80 + '円です。';

console.log(msg);
>> 値段は10080円です。

この値では最初に '値段は' + 100 の演算が行われます。 1 つが文字列のため文字列の連結が行われ '値段は100' という結果になります。次に '値段は100' + 80 の演算が行われますが 1 つが文字列のため文字列の連結が行われ '値段は10080' となります。最後に '値段は10080' + '円です。' の演算が行われ、変数には '値段は10080円です。' という文字列が代入されます。

このように加算演算子で数値と文字列を混在させる場合は、意図しない結果にならないようにご注意ください。必要であればグループ化の括弧()を使うことで演算を行う順序を変更することができます。