let result = [48, 75, 92, 61, 54, 83, 76];
// let total = result.reduce(function (sum, element){
//   return sum + element;
// }, 0);

let total =result.reduce((sum, element) => sum + element, 0);

console.log(total);

let user = [
  { name:'Yamada', result:75 },
  { name:'Suzuki', result:91 },
  { name:'Kudou', result:80 }
];

let total1 = user.reduce(function(sum, element){
  return sum + element.result;
}, 0);

console.log(total1);
