let fruit = ['apple', 'melon', 'peach'];
fruit.pop();

console.log(fruit);

let fruit1 = ['apple', 'melon', 'peach'];
fruit1.shift();

console.log(fruit1);
console.log(fruit1[0]);

let fruit2 = ['apple', 'melon', 'peach', 'grapes'];
console.log(fruit2);

// fruit2.length = 2;
// console.log(fruit2);

// fruit1.length = 0;
// console.log(fruit1);

let fruit3 = fruit2;

console.log(fruit2);
console.log(fruit3);

fruit2 = [];
console.log(fruit2);
console.log(fruit3);