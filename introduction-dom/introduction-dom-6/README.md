# ノードの子・親・兄弟ノードを取得
HTML ページに含まれるノードは階層構造になっており、その中の特定のノードに対して一つ上の階層にある親ノードや一つ下の階層にある子ノード、そして同じ階層にある兄弟ノードがありますが、これらのノードは Node オブジェクトで用意されている各種プロパティを参照することで取得することができます。

## すべての子ノードを取得する
Document オブジェクトの getElementById メソッドや querySelector メソッドなどを使って要素ノードを取得したあと、 Node オブジェクトの childNodes プロパティを参照することで、このノードの 1 つ下の階層にある子ノードをすべて取得することができます。
書式は次の通りです。

### node.childNodes

このプロパティは参照専用です。戻り値として NodeList オブジェクトを返します。

NodeList オブジェクトは複数のノードの集合です。 
NodeList オブジェクトでは length プロパティと item メソッドが用意されており、次のように取得したノードの数を取得したり、取得したノードを取り出すことができます。

### let element = document.getElementById('main');
### let children = element.childNodes;
### 
### // 取得したノードの数を取得
### let len = children.length;
### 
### // インデックスを指定して Node オブジェクトを取得
### let element = children.item(0);
### 
### // 次の形式でもインデックスを指定して Node オブジェクトを取得
### let element = children[0];

子ノードが複数あった場合、 HTML ページの中で記述された順番にインデックスが割り当てられています。インデックスは最初が 0 で 1, 2, 3... と続いていきます。
子ノードが見つからなかった場合、 childNodes プロパティは length が 0 の NodeList オブジェクトを返します。

## 最初の子ノードと最後の子ノードを取得する
Node オブジェクトの firstChild プロパティを参照することで、このノードの 1 つ下の階層にある子ノードの中の最初のノードを取得することができます。
書式は次の通りです。

### node.firstChild

このプロパティは参照専用です。
戻り値として Node オブジェクトを返します。子ノードがなかった場合は null が返ります。

Node オブジェクトの lastChild プロパティを参照することで、このノードの 1 つ下の階層にある子ノードの中の最後のノードを取得することができます。
書式は次の通りです。

### node.lastChild

このプロパティは参照専用です。
戻り値として Node オブジェクトを返します。子ノードがなかった場合は null が返ります。

例えば特定のノードの子ノードの中で最初と最後の子ノードを取得するには次のように記述します。

### let element = document.getElementById('main');
### let first = element.firstChild;
### let last = element.lastChild;

## 同じ階層の次のノードと前のノードを取得する
Node オブジェクトの nextSibling プロパティを参照することで、このノードと同じ階層にある次のノードを取得することができます。
書式は次の通りです。

### node.nextSibling
このプロパティは参照専用です。
戻り値として Node オブジェクトを返します。子ノードがなかった場合は null が返ります。

Node オブジェクトの previousSibling プロパティを参照することで、このノードと同じ階層にある一つ前のノードを取得することができます。
書式は次の通りです。

### node.previousSibling

このプロパティは参照専用です。
戻り値として Node オブジェクトを返します。子ノードがなかった場合は null が返ります。

例えば特定のノードの同じ階層にある次のノードと一つ前のノードを取得するには次のように記述します。

### let element = document.getElementById('main');
### let next = element.nextSibling;
### let prev = element.previousSibling;

## 親ノードを取得する
Node オブジェクトの parentNode プロパティを参照することで、このノードの親ノードを取得することができます。
書式は次の通りです。

### node.parentNode

このプロパティは参照専用です。
戻り値として Node オブジェクトを返します。 Document ノードの親ノードを取得した場合は null が返ります。

例えば特定のノードの親ノードを取得するには次のように記述します。

### let element = document.getElementById('main');
### let parent = element.parentNode;