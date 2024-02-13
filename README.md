# Numberオブジェクト

## Numberオブジェクトのコンストラクタ
Number オブジェクトは数値のラッパーオブジェクトです。数値に対して Number オブジェクトのメソッドを呼び出すと、数値が自動的に Number オブジェクトに変換されてメソッドが呼び出されます。

通常 Number オブジェクトを直接作成する必要はあまりありませんが、オブジェクトを作成するには Number オブジェクトのコンストラクタを使用します。書式は次のとおりです。

new Number(value)

引数には Number オブジェクトの値を指定します。数値以外を指定した場合は、いったん数値に変換されたあとで値として設定されます。値は Number オブジェクトがラップするプリミティブ値として設定されます。

## Numberオブジェクトのプリミティブ値を取得する
Number オブジェクトが持つプリミティブ値を取得するには、 Number オブジェクトで用意されているインスタンスメソッドの valueof メソッドを使用します。書式は次の通りです。

numberObj.valueOf()

## Numberオブジェクトの静的プロパティ
Number オブジェクトにはよく使用される静的プロパティが用意されています。下記はその一部です。

プロパティ	説明
Number.MAX_SAFE_INTEGER	安全な整数の最大値 (253 - 1)
Number.MIN_SAFE_INTEGER	安全な整数の最小値 (-(253 - 1))
Number.MAX_VALUE	表現できる正の数の最大値
Number.MIN_VALUE	表現できる正の数の最小値
Number.NaN	"Not a Number" (数値ではない) を表す値
Number.POSITIVE_INFINITY	無限大
Number.NEGATIVE_INFINITY	負の無限大
安全な整数とは難しい言葉になりますが正確に IEEE-754 倍精度数として表すことができ、別の値を IEEE-754 倍精度数として表した値と一致することがない値です。

