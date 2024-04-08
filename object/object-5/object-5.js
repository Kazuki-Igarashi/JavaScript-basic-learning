let user = {
  name: '山田太郎',
  age: 32,
  address:'大阪府'
};

for (key in user) {
  console.log('user.' + key + '=' + user[key]);
}