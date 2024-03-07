# 変数を宣言する
JavaScript で変数を利用するには最初に変数の宣言を行う必要があります。

## 変数の宣言方法
変数の宣言は次のいずれかを使用します。

### var 変数名;
### let 変数名;
### const 変数名=初期値;

変数の宣言に使われる 3 つのキーワードの中で const は変数の宣言時に必ず初期値を設定する必要があり、またあとから別の値を代入することができません。そのため、変数を定数のように利用する場合に使われます。

## 変数の宣言を省略した場合
変数の宣言を行わずに変数を利用した場合、エラーになる場合とならない場合があります。

変数宣言を行っていない変数の値を参照するとエラーが発生します。

console.log(weight);
>> Uncaught ReferenceError: weight is not defined

変数宣言を行っていな変数に対して値を格納した場合はエラーが発生しません。変数宣言が行われていない変数に値を格納した場合は、グローバルスコープの変数として宣言したとみなされるためです。

## letおよびconstとvarの違い
### 再宣言の禁止
var を使って変数の宣言を行った場合、もう一度同じ変数を宣言してもエラーにはなりませんでした。

var num;
num = 10;

var num;
let または const を使って変数の宣言を行った場合、同じ変数名で宣言をもう一度行うとエラーが発生します。

let num;
num = 10;

let num;
>> Uncaught SyntaxError: Identifier 'num' has already been declared

### スコープの違い
var を使って変数の宣言を行った場合、変数のスコープは関数スコープとなります。つまり関数内で宣言した変数は関数のいずれの場所でも参照することができます。
変数 msd は if 文のブロックの中で宣言された変数ですが、 var を使って宣言された変数のスコープは関数ですので、同じ関数内であればどこでも参照することができます。
それに対して let または const を使って変数の宣言を行った場合、変数のスコープはブロックスコープとなります。つまりブロック内で宣言した変数はブロック内のいずれの場所でも参照することができます。
 変数 msd は if 文のブロックの中で宣言された変数です。 let を使って宣言された変数のスコープはブロックですので、同じ関数内であってもブロックの外から参照するとエラーとなります。