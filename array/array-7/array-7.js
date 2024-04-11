let fruit = ['apple' , 'melon', 'peach'];
fruit[3] = 'banana';

console.log(fruit);

fruit[fruit.length] = 'grapes';

console.log(fruit);

fruit[7] = 'orange';
console.log(fruit);

fruit.push('orange', 'grapes');
console.log(fruit);

fruit.unshift('orange', 'grapes');
console.log(fruit);