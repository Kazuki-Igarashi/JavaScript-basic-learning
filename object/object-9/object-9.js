let objA = {a:'Ant'};
let objB = {b:'bee'};
let objC = {c:'cicada'};
let allObj = Object.assign(objA, objB, objC);

console.log(allObj);

console.log(objA);

let allObj1 = Object.assign({}, objA, objB, objC);
console.log(allObj1);

let obj1 = {a:'Ant', b:'bee'};
let obj2 = {c:'cicada', b:'butterfly'};
let allObj3 = Object.assign({}, obj1, obj2);

console.log(allObj3);

let obj3 = {a:'Ant', b:'bee'};
let cloneObj = Object.assign({}, obj3);

console.log(cloneObj);

console.log(obj3 === cloneObj);