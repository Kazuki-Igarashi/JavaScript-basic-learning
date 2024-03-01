let str = 'red bird and red flower';
let newstr = str.replace('red', 'Red');

// console.log(newstr);
// >> Red bird and red flower

let str1 = 'BananaLemonOrange';

// console.log(str.replace('Lemon', '[$&]'));
// >> Banana[Lemon]Orange
// console.log(str.replace('Lemon', '[$`]'));
// >> Banana[Banana]Orange
// console.log(str.replace('Lemon', '[$\']'));
// >> Banana[Orange]Orange