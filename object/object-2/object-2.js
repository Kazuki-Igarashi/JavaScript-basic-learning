let user ={
  name: "山田太郎",
  age: 27,
  address:'東京都'
};
console.log(user.name);


user.name = 'Tarou Yamada';
console.log(user);

myprofile = {
  '1stName': 'Tarou Yamada',
  'Favorite color': 'blue'
};

console.log(myprofile['1stName']);

let colorDB = {
  red:'赤色',
  blue:'青色',
  yellow:'黄色'
};

let color = 'blue';
console.log(colorDB);
console.log(colorDB[color]);