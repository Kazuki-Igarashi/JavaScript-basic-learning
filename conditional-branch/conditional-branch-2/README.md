# if文で複数の条件式を組み合わせてより複雑な条件分岐を行う
if 文では複数の条件式を使ってより複雑な条件分岐を行う if .. else if 文が用意されています。また条件分岐で実行されるブロックの中で別の if 文を記述してより複雑な条件分岐を行うこともできます。

## 複数の条件式を組み合わせる(if..else if)
if 文では条件式が true か false かによって実行する処理を分岐することができますが、条件式を追加することでより複雑な条件分岐を行うことができます。書式は次のとおりです。

### if (条件式1){
###   条件式1が true の時に実行する処理;
###   ...
### }else if(条件式2)
###   条件式1 が false で条件式2が true の時に実行する処理;
###   ...
### }else{
###   すべての条件式が false の時に実行する処理;
###   ...
### }
この書式では最初に「条件式1」が true を返した場合はその直後のブロック内の処理を実行し、ブロックが終わったら if 文の次の処理へ移ります。「条件式1」が false だった場合に、今度は「条件式2」が true を返した場合はその直後のブロック内の処理を実行し、ブロックが終わったら if 文の次の処理へ移ります。「条件式2」が false だった場合は else のあとのブロック内の処理を実行します。

条件式は 2 つだけではなく必要なだけ記述することができます。また else の部分は不要であれば削除して構いません。

注意すべき点として if 文の条件式は上から順に評価されていきますが、もしどこかの条件式で true になった場合はそれ以降の条件式は評価されません。例えば「条件式2」で true になる場合であっても、すでに「条件式1」で true になっていた場合は「条件式2」の評価は行われません。

if 文が含まれる関数を定義しました。そのあとで次のように関数を呼び出してみます。

function passCheck(result){
  if (result > 90){
    console.log('合格です');
    console.log('おめでとうございます');
  }else if (result > 80){
    console.log('修正して再提出してください');
  }else{
    console.log('不合格です');
    console.log('残念でした');
  }
}

指定した引数の値に応じて関数内で if 文が実行され、コンソールに対して出力が行われました。引数として 92 を指定した場合、 1 番目の条件式と 2 番目の条件式でどちらも true となりますが、 1 番目の条件式で true となった場合は 2 番目の条件式は評価されないため 2 番目の条件式のあとのブロック内の処理は実行されません。

## if文のブロックの中に別のif文を記述する
if 文で実行されるブロックの中には任意の文を記述することができますので、別の if 文を記述することもできます。

### if (条件式1){
###   条件式１が true の時に実行する処理;
###   if (条件式2){
###     条件式2が true の時に実行する処理;
###   }else{
###     条件式2が false の時に実行する処理;
###   }
### }else{
###   条件式1が false の時に実行する処理;
###   ...
### }
最初に外側の if 文の条件式が true を返した場合、直後に書かれたブロック内の処理が実行されますが、このブロック内に別の if 文が記述されており、内側の if 文の条件式が true か false かで実行する処理が分岐する形になります。

function passCheck(result){
  if (result > 80){
    if (result > 90){
      console.log('合格です');
      console.log('おめでとうございます');
    }else{
      console.log('修正して再提出してください');
    }
  }else{
    console.log('不合格です');
    console.log('残念でした');
  }
}
passCheck(78);
>> 不合格です
>> 残念でした

passCheck(84);
>> 修正して再提出してください

passCheck(98);
>> 合格です
>> おめでとうございます