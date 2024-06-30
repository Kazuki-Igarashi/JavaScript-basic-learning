// function getElements(){
//   let element = document.getElementById('box')
//   let children = element.childNodes;

//   let len = children.length;
//   console.log("ノード数：" + len);

//   for (let i = 0; i < len; i++)
//     console.log(children.item(i).nodeName);
// }

// function getElements(direct){
//   let element = document.getElementById('box')
  
//   if(direct == 1){
//     let child = element.firstChild;

//     while(child){
//       console.log(child.nodeName);
//       child = child.nextSibling;
//     }
//   }else{
//     let child = element.lastChild;

//     while(child){
//       console.log(child.nodeName);
//       child = child.previousSibling;
//     }
//   }
// }

function getElements(direct){
  let element = document.getElementById('shop');

  let parent = element.parentNode;

  while(parent){
    console.log(parent.nodeName);
    parent = parent.parentNode;
  }
}