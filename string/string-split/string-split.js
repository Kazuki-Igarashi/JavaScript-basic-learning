// let months = 'Jan..Feb..Mar..Apr..May..Jun';
// let monthAry = months.split('..');

// console.log(monthAry);
// >> (6) ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

// let months = '/Jan/Feb/Mar/Apr/May/Jun/';
// let monthAry1 = months.split('/');

// console.log(monthAry);
// >> (8) ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", ""]

let months = 'Jan..Feb..Mar..Apr..May..Jun';
let monthAry = months.split('..', 3);

// console.log(monthAry);
// >> ["Jan", "Feb", "Mar"]