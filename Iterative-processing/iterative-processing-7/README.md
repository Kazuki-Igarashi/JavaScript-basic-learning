# continue文の使い方
continue 文を使うと continue 文が記述されている一番内側の繰り返し処理の残りの処理をスキップし、次の繰り返し処理へ移すことができます。

## continue文の使い方
continue 文が実行されると、繰り返し処理の残りの処理をスキップして、次の繰り返し処理を開始します。書式は次の通りです。

### continue;
continue 文の対象となるのは for 文、 while 文、 do...while 文、 for...in 文、 for...of 文です。 
繰り返し処理の中で 変数 i の値をコンソールに出力しています。変数 i の値が 3 の倍数の時はコンソールへの出力の処理をスキップして次の繰り返し処理を行っています。

for (let i = 1; i < 10; i++){
  if (i % 3 == 0){
    continue;
  }
  console.log(i);
}

console.log('end');
>> 1
>> 2
>> 4
>> 5
>> 7
>> 8
>> end

continue 文が記述されている最も内側のブロックは if 文ですが、 if 文は continue 文の対象ではないためその外側の for 文の残りの処理をスキップしています。