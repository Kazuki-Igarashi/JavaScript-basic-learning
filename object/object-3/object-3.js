let mybox = {
  width:400,
  height:300
};

console.log(mybox);

mybox.color = '#FF0000';
console.log(mybox);

let mybox1 = {
  width:400, 
  height:300,
  color:'#FF0000'
};

console.log(mybox1);

delete mybox1.height;
console.log(mybox1);