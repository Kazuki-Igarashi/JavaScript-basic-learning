# ノードの種類を取得(nodeType)
ノードには要素ノードやテキストノードの他に色々なノードの種類が用意されていますが、 Node オブジェクトの nodeType プロパティを参照するとノードの種類を確認することができます。

## ノードの種類を確認する
Node オブジェクトの nodeType プロパティを参照するとノードの種類を確認することができます。
書式は次の通りです。

### node.nodeType

戻り値はノードの種類を表す unsigned short 型の値が戻されます。どの値がどのノードの種類になるのかは次の一覧を見てください。

 1 ELEMENT_NODE                 要素ノード
 2 ATTRIBUTE_NODE               属性ノード
 3 TEXT_NODE                    テキストノード
 4 CDATA_SECTION_NODE           CDATAセクション
 5 ENTITY_REFERENCE_NODE        実体参照
 6 ENTITY_NODE                  実体宣言
 7 PROCESSING_INSTRUCTION_NODE  処理命令
 8 COMMENT_NODE                 コメントノード
 9 DOCUMENT_NODE                ドキュメント
10 DOCUMENT_TYPE_NODE           ドキュメントタイプ
11 DOCUMENT_FRAGMENT_NODE       ドキュメントの断片
12 NOTATION_NODE                記法
ノードを取得したあと、ノードの nodeType プロパティを参照することで取得したノードの種類を確認することができます。
