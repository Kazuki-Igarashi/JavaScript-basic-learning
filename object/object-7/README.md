# プロパティ名と値のデータからオブジェクトを作成する(fromEntries)
Object オブジェクトのメソッドである fromEntries メソッドを使うことで、 2 つの値を持つデータの一覧からオブジェクトを作成することができます。
例えば 2 つの要素を持つ配列を要素として持つような配列からオブジェクトを作成できます。

## プロパティ名と値のデータからオブジェクトを作成する(fromEntries)
プロパティと値のデータからオブジェクトを作成するには Object オブジェクトの fromEntries メソッドを使います。
書式は次の通りです。

### Object.fromEntries(オブジェクト)

引数には反復処理可能なオブジェクトを指定します。具体的には Array オブジェクトまたは Map オブジェクトなどです。
メソッドを実行すると、引数に指定したオブジェクトから新しい Object オブジェクトを作成します。

引数に指定するオブジェクトは、 2 つの値がペアとなったデータを指定します。 
1 つ目の値がプロパティ名、 2 つ目の値がプロパティの値として格納されます。

let userObj = Object.fromEntries(userArray);

console.log(userObj);
>> {name: "山田太郎", age: 32, address: "大阪府"}
2 つの要素を持つ配列を要素として持つ配列から新しいオブジェクトを作成することができました。

なお引数に指定するオブジェクトのデータで、 2 つの値のペアではなく 1 つの値しか含まれていなかった場合、作成されるオブジェクトの該当のプロパティの値が undefined となります。