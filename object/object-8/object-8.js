const user = {
  name: '山田太郎',
  age: 30,
  address: '大阪府'
};

Object.freeze(user);
user.address = '東京都';
user.hobby = '映画';
delete user.age;

console.log(user);

const point = [48, 72, 65];
Object.freeze(point);

point[1] = 78;
point[3] = 54;

console.log(point);

let user1 = {
  name: '山田太郎',
  age: 30,
  address: '大阪府',
  hobby: ['Movie', 'Game']
};

Object.freeze(user1);
Object.freeze(user1.hobby);

user1.name = '山田太郎';
user1.hobby[0] = 'Sports';

console.log(user1);
console.log(user1.hobby);