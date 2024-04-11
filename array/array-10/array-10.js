let fruit = ['Apple', 'Melon', 'Orange'];
fruit.forEach(function(element) {
  console.log(element);
});

// アロー関数
fruit.forEach(element => console.log(element));

fruit.forEach(function(element, index, array){
  console.log('Index: ' + index);
  console.log('Element:'+ element);
  console.log('Array:'+ array);
});

let alpha = ['A', 'B', 'C', , ,];
alpha.forEach(function(element){
  console.log(element);
});

for(let i = 0; i < alpha.length; i++) {
  console.log(alpha[i]);
}

for (let element of alpha){
  console.log(element);
}

for (let element of alpha){
  console.log(element);
  if (element === 'B') {
    console.log('End');
    break
  }
}