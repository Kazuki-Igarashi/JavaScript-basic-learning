function getElements(){
  let elements = document.getElementsByName("hobby");
  let len = elements.length;
  for(let i = 0; i < len; i++){
    if(elements[i].checked){
      console.log(elements.item(i).value + 'is checked');
    }else{
      console.log(elements.item(i).value + 'is not checked');
    }
  }
}