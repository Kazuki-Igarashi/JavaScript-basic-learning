# name属性の値を指定して要素ノードを取得(getElementsByName)
Document オブジェクトの getElementsByName メソッドは、要素の name 属性の値を指定して一致する要素ノードをすべて取得します。

## getElementsByNameの書式と使い方
Document オブジェクトの getElementsByName メソッドは name 属性の値を指定して要素ノードを取得します。

書式は次の通りです。

### document.getElementsByName(name)

引数には name 属性の値を DOMString オブジェクトで指定します(例えば 'hobby' など)。戻り値は NodeList オブジェクトです。

NodeList オブジェクトは複数の要素ノードの集合です。 
NodeList オブジェクトでは length プロパティと item メソッドが用意されており、次のように取得した要素ノードの数を取得したり、指定の要素ノードを取り出すことができます。

### let elements = document.getElementsByName('hobby');
### 
### // 取得した要素を取得
### let len = elements.length;
### 
### // インデックスを指定して要素を取得
### let element = elements.item(0);
### 
### // 次の形式でもインデックスを指定して要素を取得
### let element = elements[0];

同じ name 属性の値を持つ要素ノードは、 HTML ページの中で記述された順番にインデックスが割り当てられています。
インデックスは最初が 0 で 1, 2, 3... と続いていきます。
指定した name 属性の値を持つ要素ノードが見つからなかった場合、 getElementsByName メソッドは null を返すわけではなく、 length が 0 の NodeList オブジェクトを返します。

