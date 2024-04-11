let fruit = ['Apple', 'Grapes', 'Melon', 'Orange'];
let newfruit = fruit;

fruit.reverse();

console.log(fruit);
console.log(newfruit);

console.log(fruit.sort());

let no = [5, 27, 12, 41];

console.log(no.sort());

let word = ['AA', 'CC', 'BB'];

word.sort(function(first, second){
  if (first > second){
    return -1;
  }else if (first < second){
    return 1;
  }else{
    return 0;
  }
});

console.log(word);


no.sort(function(first, second){
  if (first > second){
    return 1;
  }else if (first < second){
    return -1;
  }else{
    return 0;
  }
});

console.log(no);

no.sort(function(first, second){
  return first - second;
});

console.log(no);
