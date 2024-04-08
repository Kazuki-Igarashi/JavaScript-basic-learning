let resultYamada
let resultSatou
let resultTakahashi

resultYamada = 85;
resultSatou = 78;
resultTakahashi = 92;

console.log(resultYamada);
console.log(resultSatou);
console.log(resultTakahashi);

let ave = (resultYamada + resultSatou + resultTakahashi) / 3;
console.log('ave = ' + ave);

let result = new Array(85, 78, 92, 82, 64, 61, 90, 86, 70, 88);
let sum = 0;

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
  sum += result[i];
}

console.log('ave = ' + sum /result.length);