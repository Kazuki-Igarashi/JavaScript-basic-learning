let x;
let y;
let z;

z = (x = 4, y = 8, y += x);
console.log(z);

for (let i = 1, j = 4; i < 5; i++, j--){
  console.log("i =" + i + ", j =" + j);
}