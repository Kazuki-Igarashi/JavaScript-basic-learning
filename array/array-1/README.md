# 配列とは
配列の具体的な利用方法についてみていく前に、配列がどのような時に利用さえるのかどんなメリットがあるのかについて

## 配列とは
配列を使うことで複数の値を 1 つの変数で保管・管理することができます。
例えば 3 人のテストの成績を変数に保管する場合で考えてみます。
変数を使用する場合、変数には 1 つの値しか保管できませんので 3 つの値を保管するには 3 つの変数が必要となります。

変数を使用している場合、コンソールに出力するにも一つ一つ行う必要があります。
また合計を計算する場合にもすべての変数を列挙して加算する必要があります。
今回は 3 人分だったので一つ一つ記載してもまだ大丈夫ですが、これが 50 人の成績だとしたらコードも非常に長くなり大変です。

配列は一つの変数を使って複数の値を保管することができます。
 このように同じような目的に値を数多く格納したい場合に配列を使うと便利です。
 例えば先ほどのサンプルを配列を使って書き直してみます。

### let result = new Array(85, 78, 92);
配列は任意の数の値を管理することができます。
先ほどの例では 3 人分の成績の値を管理しましたが、これが 50 人分であっても可能です。
まったく利用目的が異なる値を全て配列に入れてしまっても逆に分かりにくくなりますが、今回のように同じような意味を持つ複数の値を管理する時に便利です。

また配列の大きなメリットは繰り返し処理と組み合わせて利用できることです。
配列に格納された値を順に出力したり平均を計算して出力する場合は次のように記述することができます。

let result = new Array(85, 78, 92);
let sum = 0;

for (let i = 0 ; i < result.length; i++){
  console.log(result[i]);
  sum += result[i];
}

console.log('ave = ' + sum / result.length);

>> 85
>> 78
>> 92
>> ave = 85

これが 10 人分になった場合、最初の配列の宣言で 10 人分の成績を記述する必要がありますが、 2 行目以降の処理は何も変える必要がありません。
このように配列をうまく利用することで、コードが簡潔に記述することができるようになります。