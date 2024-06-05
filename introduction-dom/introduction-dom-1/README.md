# id属性の値を指定して要素ノードを取得(getElementById)
Document オブジェクトの getElementById メソッドは、要素の id 属性の値を指定して一致する Element オブジェクトを取得します。

## getElementByIdの書式と使い方
Document オブジェクトの getElementById メソッドは id 属性の値を指定して要素ノードを取得します。
書式は次の通りです。

### document.getElementById(id)

引数には id 属性の値を DOMString オブジェクトで指定します(例えば 'example' など)。戻り値は Element オブジェクトです。
見つからなかった場合は null が返されます。

例えば id 属性の値として'example' が設定された要素ノードを取得するには次のように記述します。

### let element = document.getElementById('example');

id 属性の値は HTML ページ内で複数の要素に同じ値を付けることができないので、指定した id 属性の値が一致する要素ノードは 通常一つだけです。
もし同じ id 属性の値が複数の要素ノードに付けられていた場合は最初の要素ノードを取得します。

