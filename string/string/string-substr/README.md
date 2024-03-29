# 文字列から開始位置と文字数を指定して部分文字列を取得する(substr)
String オブジェクトのインスタンスメソッドである substr は、文字列に対して開始位置と文字数を指定して部分文字列を取得します。

## 部分文字列を取得する(substr)
String オブジェクトの substr メソッドは、対象の文字列に対して開始位置と文字数を指定して部分文字列を取得します。書式は次のとおりです。

### 文字列.substring(開始インデックス[, 文字数])

対象の文字列の開始インデックスから文字数分だけの部分文字列を新しい文字列を戻り値として返します。文字数を省略した場合は文字列の最後までを取得します。対象の文字列は変更されません。

インデックスは文字列の最初の文字が 0 、次の文字が 1 となります。下記は開始インデックスを 1 、文字数を 2 に指定した場合です。

let address = 'いろはにほへと';
let sub;

sub = address.substr(4, 2);
console.log(sub);
>> ほへ

sub = address.substr(3);
console.log(sub);
>> にほへと
開始インデックス 4 、文字数 2 を指定した場合は、インデックス 4 から 2 文字分の部分文字列を取得します。開始インデックス 3 を指定し文字数を省略した場合は、インデックス 3 から文字列の最後までの部分文字列を取得します。

## インデックスに負の値を指定する
開始インデックスには負の値を指定することができます。最後の文字が -1 、最後の一つ前の文字が -2 となります。

let address = 'いろはにほへと';
let sub;

sub = address.substr(-3, 2);
console.log(sub);
>> ほへ

sub = address.substr(-4);
console.log(sub);
>> にほへと
開始インデックス -3 、文字数 2 を指定した場合は、インデックス -3 から 2 文字分の部分文字列を取得します。開始インデックス -4 を指定し文字数を省略した場合は、インデックス -4 から文字列の最後までの部分文字列を取得します。

## 文字数に0または負の値を指定する
文字数に 0 または負の値を指定すると文字数が 0 の部分文字列を取得することになるためいずれも空文字が返ります。

let address = 'いろはにほへと';
let sub;

sub = address.substr(3, 0);
console.log(sub);
>> (空文字)

sub = address.substr(5, -2);
console.log(sub);
>> (空文字)
文字数が 0 または負の値が指定されているので、どちらも空文字が返されています。