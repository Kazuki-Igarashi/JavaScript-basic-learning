// function getElements(){
//   let elements = document.getElementsByTagName('p');
//   let len = elements.length;
//   for (let i = 0; i < len; i++){
//       console.log('Text: ' + elements.item(i).textContent);
//   }
// }


function getElements(){
  let winter = document.getElementById('winter');
  let elements = winter.getElementsByTagName('p');
  let len = elements.length;
  for (let i = 0; i < len; i++){
      console.log('Text: ' + elements.item(i).textContent);
  }
}