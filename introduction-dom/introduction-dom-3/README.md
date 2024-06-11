# class属性の値を指定して要素ノードを取得(getElementsByClassName)
Document オブジェクトの getElementsByClassName メソッドは、要素の class 属性の値を指定して一致する要素ノードをすべて取得します。

## getElementsByClassNameの書式と使い方
Document オブジェクトの getElementsByClassName メソッドは class 属性の値を指定して要素ノードを取得します。
書式は次の通りです。

### document.getElementsByClassName(classnames)

引数には class 属性の値を DOMString オブジェクトで指定します(例えば 'box' など)。複数の class 属性の値を指定することができ、指定した値のいずれかに一致する要素ノードをすべて取得します。
その場合は空白文字で区切って指定します(例えば 'box menu' など)。戻り値は HTMLCollection オブジェクトです。

HTMLCollection オブジェクトは複数の要素ノードの集合です。 
HTMLCollection オブジェクトでは length プロパティと item メソッド、および namedItem メソッドが用意されており、次のように取得した要素の数を取得したり、指定の要素を取り出すことができます。

#### let elements = document.getElementsByClassName('box');
#### 
#### // 取得した要素の数を取得
#### let len = elements.length;
#### 
#### // インデックスを指定して要素を取得
#### let element = elements.item(0);
#### 
#### // 次の形式でもインデックスを指定して要素を取得
#### let element = elements[0];

同じ class 属性の値をを持つ要素ノードは、 HTML ページの中で記述された順番にインデックスが割り当てられています。
インデックスは最初が 0 で 1, 2, 3... と続いていきます。

指定した class 属性の値が付けられた要素ノードが見つからなかった場合、 getElementsByClassName メソッドは null を返すわけではなく、 length が 0 の HTMLCollection オブジェクトを返します。

## 特定の要素の子孫要素に限定して要素ノードを取得する
getElementsByClassName メソッドは Document オブジェクトの他に Element オブジェクトでも用意されています。
その為、特定の要素に対して getElementsByClassName メソッドを使用すると、その要素の子や孫の要素に限定して class 属性の値を指定して要素ノードを取得することができます。

書式は次の通りです。

### element.getElementsByClassName(classnames)

引数には class 属性の値を DOMString オブジェクトで指定します(例えば 'box' など)。
複数の class 属性の値を指定することができ、指定した値のいずれかに一致する要素ノードをすべて取得します。
その場合は空白文字で区切って指定します(例えば 'box menu' など)。戻り値は HTMLCollection オブジェクトです。

例えば id 属性の値が 'example' の要素ノードの子孫の中から class 属性の値が 'box' の要素ノードの一覧を取得するには次のように記述します。

### let element = document.getElementById('example');
### let elements = element.getElementsByClassName('box');

次のようにまとめて記述することもできます。
### let elements = document.getElementById('example').getElementsByClassName('box');