function getElement(){
  elements = document.querySelectorAll('.shop p');

  let len = elements.length;
  for(let i = 0; i < len; i++){
    console.log('text: ' + elements.item(i).textContent);
  }
}

