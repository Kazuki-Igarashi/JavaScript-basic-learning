for (let i = 0; i < 3; i++){
  for(let j = 0; j < 3; j++){
    console.log('i =' + i + ', j =' + j)
  }
}
console.log('end')

for (let i = 0; i < 3; i++){
  for (let j = 0; j < 3; j++){
    for (let k = 0; k < 3; k++){
      console.log('i =' + i + ', j =' + j + ', k =' + k)
    }
  }
}

console.log('end')

const result = [
  [88,78,82],
  [92,64,76]
];

for (let i = 0; i < 2; i++){
  for (let j = 0; j < 3; j++){
    console.log('成績 =' + result[i][j])
  }
}