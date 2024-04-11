let alpha = ['A', 'B', 'C', 'D', 'E'];
console.log(alpha);

alpha.splice(1, 2, 'X', 'Y', 'Z');
console.log(alpha);

alpha.splice(1, 2);
console.log(alpha);

alpha.splice(1, 0, 'X', 'Y');

console.log(alpha);