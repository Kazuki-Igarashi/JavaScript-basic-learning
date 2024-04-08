let user = {
  name: '山田太郎',
  age: 32,
  address: '大阪府'
};

let keyArray = Object.keys(user);
console.log(keyArray);

let keyArray2 = Object.keys(user);
keyArray2.forEach(function(element) {
  console.log(user[element]);
});

let valueArray = Object.values(user);
console.log(valueArray);

let propertyArray = Object.entries(user);
propertyArray.forEach(function(element) {
  console.log(element);
});