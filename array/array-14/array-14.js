let fruit = ['Apple', 'Grapes', 'Melon', 'Orange' ];
// let newfruit = fruit.map(function(element){
//   return element.toUpperCase();
// });

let newfruit = fruit.map(element => element.toUpperCase());

console.log(newfruit);
console.log(fruit);