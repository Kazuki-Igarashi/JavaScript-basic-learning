function getElements(){
  const ntype = [
    'ELEMENT',
    'ATTRIBUTE',
    'TEXT',
    'CDATA_SECTION',
    'ENTITY_REFERENCE',
    'ENTITY',
    'PROCESSING_INSTRUCTION',
    'COMMENT',
    'DOCUMENT',
    'DOCUMENT_TYPE',
    'DOCUMENT_FRAGMENT',
    'NOTATION'];

    let element = document.getElementById('blog');
    let children = element.childNodes;

    let len = children.length;
    for (let i = 0; i < len; i++){
        console.log(ntype[children.item(i).nodeType - 1]);
    }
}