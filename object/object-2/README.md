# プロパティの値の取得と新しい値の代入
作成したオブジェクトに含まれるプロパティの値を取得したり新しい値を代入するには、プロパティ名を指定してプロパティへアクセスし、値を取得したり代入したりします。

## ピリオド演算子形式でアクセスする
オブジェクトのプロパティへアクセスする方法のひとつはピリオド演算子形式でアクセスする方法です。書式は次の通りです。

### オブジェクト.プロパティ名

オブジェクトのあとにピリオド(.)を記述し、そのあとにアクセスしたいプロパティのプロパティ名を記述します。
注意点としてプロパティにピリオド演算子の形式でアクセスできるのは、プロパティ名の値が変数名などと同じルールに従った値になっている場合だけです。
例えばプロパティ名の最初の文字が数字から始まっていたりプロパティ名にハイフンが含まれている場合はピリオド演算子の形式は利用できません。

プロパティ名に数値から始まっている値が設定されているプロパティに対してピリオド演算子の形式でアクセスしようとするとエラーになります。

myprofile = {
  '1stName':'Yamada',
  'Favorite color':'Blue'
};

console.log(myprofile.1stName);
>> Uncaught SyntaxError: missing ) after argument list
プロパティ名の値が変数名などと同じルールに従っていない場合は、このあとで解説する角括弧[]形式を使ってプロパティにアクセスしてください。

## 角括弧[]形式でアクセスする
オブジェクトのプロパティへアクセスする方法のもうひとつは角括弧[]形式でアクセスする方法です。書式は次の通りです。

### オブジェクト['プロパティ名']

オブジェクトのあとに角括弧 [] を記述し、 [] の中にアクセスしたいプロパティのプロパティ名を文字列として記述します。
角括弧 [] 形式を使う場合にはプロパティ名がどのような文字列であっても指定することができます。そのため、次のサンプルのようにプロパティ名に数値から始まっている値が設定されているプロパティに対しても問題なくアクセスできます。

myprofile = {
  '1stName':'Yamada',
  'Favorite color':'Blue'
};

console.log(myprofile['1stName']);
>> Yamada

## プロパティ名の値として変数を指定する
角括弧[]形式を使用している場合はプロパティ名として変数を指定することができます。

let colorDB = {
  red:'赤色',
  blue:'青色',
  yellow:'黄色'
}

let color = 'blue';
console.log(colorDB[color]);
>> 青色
プロパティ名の値として変数を指定した場合、変数に格納されている値がプロパティ名ーとして指定されたものとしてプロパティにアクセスします。
なお、プロパティ名に変数を指定することができるのは角括弧[]形式を使用している場合だけです。ピリオド演算子形式では使用できません。