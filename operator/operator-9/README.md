# typeof演算子
typeof 演算子は対象の値のデータ型を表す文字列を返す演算子です。 typeof 演算子を使用することでデータ型を調べることができます。

## typeof演算子の使い方
typeof 演算子は対象となる値のデータ型を表す文字列を返す演算子です。書式は次の通りです。

### typeof 値
値には数値や文字列、オブジェクトなどの値を指定します。値に応じて返される値は次の通りです。

console.log(typeof 80);
>> number
console.log(typeof 80n);
>> bigint
console.log(typeof 'Pen');
>> string
console.log(typeof true);
>> boolean
console.log(typeof null);
>> object
console.log(typeof NaN);
>> number
console.log(typeof undefined);
>> undefined
console.log(typeof Symbol('A'));
>> symbol
console.log(typeof [10, 20]);
>> object
console.log(typeof {a:'abc'});
>> object

数値は 'number' 、文字列は 'string' 、論理値は 'boolean' などが返されます。配列などのオブジェクト型はすべて 'object' となりますが、関数だけは 'function' となります。なお null に対しては 'object' が返されるので注意してください。

typeof 演算子が返す値は文字列ですので、文字列と比較することができます。