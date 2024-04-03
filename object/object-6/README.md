# オブジェクトからプロパティ名や値の一覧を配列で取得する(key, values, entries)
Object オブジェクトのメソッドである keys メソッド、 values メソッド、 entries メソッドを使うことで、オブジェクトに含まれるプロパティ名やプロパティの値の一覧を配列として取得することができます。

## プロパティ名の一覧を取得する(keys)
オブジェクトに含まれるプロパティのプロパティ名の一覧を取得するには Object オブジェクトの keys メソッドを使います。
書式は次の通りです。

### Object.keys(オブジェクト)

引数に指定したオブジェクトに含まれるプロパティ名の一覧を配列として取得します。

let keyArray = Object.keys(user);
console.log(keyArray);
>> ["name", "age", "address"]
オブジェクトに含まれる 3 つのプロパティのプロパティ名を要素とした配列を取得することができます。
それぞれのプロパティ名は文字列として配列に格納されています。

配列の要素を順に取得する Array オブジェクトの forEach メソッドをあわせて使うことでプロパティの値を順に取得することもできます。

let keyArray = Object.keys(user);
keyArray.forEach(function(element){
  console.log(user[element]);
});

>> 山田太郎
>> 32
>> 大阪府
オブジェクトに含まれるプロパティ名の一覧を配列で取得したあと、配列から要素を順に取り出しオブジェクトのプロパティの値を順に取得しコンソールに表示しました。

## プロパティの値の一覧を取得する(values)
オブジェクトに含まれるプロパティの値の一覧を取得するには Object オブジェクトの values メソッドを使います。
書式は次の通りです。

### Object.values(オブジェクト)
引数に指定したオブジェクトに含まれるプロパティの値の一覧を配列として取得します。

let valueArray = Object.values(user);
console.log(valueArray);
>> ["山田太郎", 32, "大阪府"]
オブジェクトに含まれる 3 つのプロパティの値を要素とした配列を取得することができました。

## プロパティの名前と値の一覧を取得する(entries)
オブジェクトに含まれるプロパティの名前と値のペアの一覧を取得するには Object オブジェクトの entries メソッドを使います。書式は次の通りです。

### Object.entries(オブジェクト)
引数に指定したオブジェクトに含まれるプロパティ毎に [プロパティ名, 値] の一覧を配列として取得します。

let propertyArray = Object.entries(user);
propertyArray.forEach(function(element){
  console.log(element);
});

>> ["name", "山田太郎"]
>> ["age", 32]
>> ["address", "大阪府"]
オブジェクトに含まれる 3 つのプロパティについて、プロパティ名と値を配列にして要素とした配列を取得することができました。