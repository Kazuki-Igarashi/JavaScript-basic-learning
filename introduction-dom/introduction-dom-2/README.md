# タグ名を指定して要素ノードを取得(getElementsByTagName)
Document オブジェクトの getElementsByTagName メソッドは、要素のタグ名を指定して一致する要素ノードをすべて取得します。

## getElementsByTagNameの書式と使い方
Document オブジェクトの getElementsByTagName メソッドはタグ名(要素名)を指定して要素ノードを取得します。
書式は次の通りです。

### document.getElementsByTagName(tagname)

引数にはタグ名を DOMString オブジェクト(文字列と考えて頂いて構いません)で指定します(例えば 'div' や 'p' など)。タグ名に '*' を指定した場合はすべての要素に一致します。戻り値は HTMLCollection オブジェクトです。

HTMLCollection オブジェクトは複数の要素ノードの集合です。
HTMLCollection オブジェクトでは length プロパティと item メソッド、および namedItem メソッドが用意されており、次のように取得した要素ノードの数を取得したり、指定した要素ノードを取り出すことができます。

 >let elements = document.getElementsByTagName('p');
 >
 >// 取得した要素の数を取得
 >let len = elements.length;
 >
 >// インデックスを指定して要素を取得
 >let element = elements.item(0);
 >
 >// 次の形式でもインデックスを指定して要素を取得
 >let element = elements[0];
 >
 >// ID属性またはname属性を指定して要素を取得
 >let element = elements.item('user');

同じタグ名を持つ要素ノードは、 HTML ページの中で記述された順番にインデックスが割り当てられています。
インデックスは最初が 0 で 1, 2, 3... と続いていきます。

指定したタグ名の要素ノードが見つからなかった場合、 getElementsByTagName メソッドは null を返すわけではなく、 length が 0 の HTMLCollection オブジェクトを返します。

## 特定の要素の子孫要素に限定して要素ノードを取得する
getElementsByTagName メソッドは Document オブジェクトの他に Element オブジェクトでも用意されています。
その為、特定の要素ノードに対して getElementsByTagName メソッドを使用すると、その要素ノードの子や孫の要素ノードに限定してタグ名(要素名)を指定して要素ノードを取得することができます。
書式は次の通りです。

### element.getElementsByTagName(tagname)

引数にはタグ名を DOMString オブジェクトで指定します(例えば 'div' や 'p' など)。タグ名に '*' を指定した場合はすべての要素に一致します。戻り値は HTMLCollection オブジェクトです。なお、起点となる要素ノード自身は対象ではありません。

例えば id 属性の値が 'example' の要素ノードの子孫の中から p タグの要素ノードの一覧を取得するには次のように記述します。

### let element = document.getElementById('example');
### let elements = element.getElementsByTagName('p');

次のようにまとめて記述することもできます。

### let elements = document.getElementById('example').getElementsByTagName('p');

