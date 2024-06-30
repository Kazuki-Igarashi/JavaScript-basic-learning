function getElements(){
  let element = document.getElementById('shopinfo');
  let elements = element.getElementsByClassName('box');
  let len = elements.length;
  for(let i = 0; i < len; i++){
    elements.item(i).style.border="2px solid #0000ff";
  }
}

