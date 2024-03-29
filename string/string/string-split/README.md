# 文字列を指定の区切り文字で分割する(split)
String オブジェクトのインスタンスメソッドである split は、文字列を指定の区切り文字で分割し、要素としてそれぞれ格納した配列を戻り値として返します。

## 文字列を分割する(split)
String オブジェクトの split メソッドは、対象の文字列を指定した区切り文字で分割し、分割された文字列をそれぞれ要素として格納した配列を返します。書式は次のとおりです。

### 文字列.split([区切り文字[, 最大分割回数]])

引数の区切り文字には文字列または正規表現オブジェクトを指定してください。 1 文字だけでなく複数の文字の並びを指定することもできます。分割された部分文字列がそれぞれ要素として格納された配列が返されます。区切り文字が省略された場合は、文字列全体が要素として格納された配列が返されます。

最大分割回数を指定した場合、指定した回数だけ区切り文字が現れた時点で分割を終了します。ご注意いただきたいのは最後に分割された部分文字列は戻り値の配列に格納されますが、最後の区切り文字以降の文字列は戻り値には含まれません。

文字列の先頭に区切り文字が含まれていた場合、戻り値の配列の最初の要素に空文字が入ります。同様に文字列の最後に区切り文字が含まれていた場合、最後の要素に空文字が入ります。

次に文字列の最大分割回数を指定してみます。次のサンプルをみてください。

let months = 'Jan..Feb..Mar..Apr..May..Jun';
let monthAry = months.split('..', 3);

console.log(monthAry);
>> ["Jan", "Feb", "Mar"]
最大分割回数に 3 を指定しているので、区切り文字が 3 回現れるまでは分割を行います。最後の区切り文字以降の文字列は戻り値には含まれません。