#複数のオブジェクトを一つにまとめる(assign)
Object オブジェクトのメソッドである assign メソッドを使うことで、複数のオブジェクトを 1 つにまとめたオブジェクトを取得することができます。
また同じメソッドを使うことでオブジェクトの複製を作成することもできます。

## 複数のオブジェクトを一つにまとめる(assign)
複数のオブジェクトを一つにまとめたるには Object オブジェクトの assign メソッドを使います。
書式は次の通りです。

### Object.assign(コピー先オブジェクト, コピー元オブジェクト1, コピー元オブジェクト2, ...)

1 番目の引数がコピー先となるオブジェクトです。このオブジェクトに対して 2 番目以降のオブジェクトのプロパティを順番にコピーして追加していきます。戻り値は追加が終わったあとのコピー先オブジェクトです。

コピー先オブジェクトに対して他の引数で指定されたオブジェクトのプロパティが追加されていくので、コピー先オブジェクト自身が変更される点に注意してください。

let objA = {a:'Ant'};
let objB = {b:'bee'};
let objC = {c:'cicada'};
let allObj = Object.assign(objA, objB, objC);

console.log(allObj);
>> {a: "Ant", b: "bee", c: "cicada"}

console.log(objA);
>> {a: "Ant", b: "bee", c: "cicada"}
3 つのオブジェクトに含まれていたプロパティがひとつにまとめられました。
なおすべてのプロパティを持つ新しいオブジェクトが作成されているのではなく、 assign メソッドの最初の引数のオブジェクトに他のオブジェクトのプロパティが追加されている点に注意。 
assign メソッドの戻り値は最初の引数のオブジェクトと同じです。

既存のオブジェクトを変更せずにオブジェクトのプロパティを一つにまとめたオブジェクトを取得したい場合は、 assign メソッドの最初に引数に空のオブジェクト {} を指定します。

let allObj = Object.assign({}, objA, objB, objC);

console.log(allObj);
>> {a: "Ant", b: "bee", c: "cicada"}
空のオブジェクトに対して他のオブジェクトのプロパティが順番に追加され、ひとつにまとめられたオブジェクトを戻り値として取得できます。

なおオブジェクトの中に同じプロパティ名を持つプロパティがあった場合は、あとに記述されているプロパティで上書きされます。

let objA = {a:'Ant', b:'bee'};
let objB = {c:'cicada', b:'butterfly'};
let allObj = Object.assign({}, objA, objB);

console.log(allObj);
>> {a: "Ant", b: "butterfly", c: "cicada"}
プロパティ名 b を持つプロパティがまとめようとする 2 つのオブジェクトにそれぞれ含まれています。

## オブジェクトの複製を作成する
空のオブジェクトに対してひとつだけオブジェクトを指定して assign メソッドを呼び出すことでオブジェクトの複製を作成することができます。

let obj = {a:'Ant', b:'bee'};
let cloneObj = Object.assign({}, obj);

console.log(cloneObj);
>> {a: "Ant", b: "bee"}

console.log(obj === cloneObj);
>> false
assign メソッドの 2 番目の引数に指定したオブジェクトの複製を作成し、戻り値として取得しました。なお 1 番目の引数である空のオブジェクトに対してプロパティを追加したものなので、 2 つのオブジェクトは名前や値が同じプロパティを持っていますが別のオブジェクトです。