let pref = 'Osaka';

switch (pref){
  case 'Osaka':
    console.log('住所は大阪府です');
    break;
  case 'Kyoto':
    console.log('住所は京都府です');
    break;
  case 'Tokyo':
    console.log('住所は東京都です');
    break;
  default:
    console.log('住所はその他です');
    break;
}

let pref1 = 'Osaka';

if (pref1 === 'Tokyo'){
  console.log('住所は東京都です');
}else if (pref1 === 'Osaka'){
  console.log('住所は大阪府です');
}else{
  console.log('住所はその他です');
}

let pref2 = 'Osaka';

switch (pref2){
  case 'Tokyo':
    console.log('住所は東京都です');
  case 'Osaka':
    console.log('住所は大阪府です');
  case 'Aichi':
    console.log('住所は愛知県です');
  default:
    console.log('住所はその他です');
}

let ans = '八月';

switch (ans){
  case '8月':
  case '八月':
  case 'August':
    console.log('正解です');
    break;
  default:
    console.log('不正解です');
}
