// let num = 10;
// console.log(num.toString(100));

// let num1 = 3.14;
// console.log(num1.toFixed(1000));

// let str = '3.14';
// console.log(str.toFixed());

// console.log(24.toFixed());

// function returnFixed(num, digits){
//   try{
//     return num.toFixed(digits);
//   }catch(e){
//     console.error(e);
//     return null;
//   }
// }

// console.log('Start');

// console.log(returnFixed(3.87654, 3));
// console.log(returnFixed(3.87654, 1000));
// console.log(returnFixed('3.87654', 1000));

// console.log('End');

function returnFixed(num, digits){
  try{
    return num.toFixed(digits)
  } catch(e) {
    if (e instanceof RangeError){
      console.error('RangeError');
      return null;
    } else if (e instanceof TypeError){
      console.error('TypeError');
      return null;
    } else {
      console.error(e);
      return null;
    }
  }
}

console.log('Start');

console.log(returnFixed(3.87654, 3));
console.log(returnFixed(3.87654, 1000));
console.log(returnFixed('3.87654', 1000));

console.log('End');