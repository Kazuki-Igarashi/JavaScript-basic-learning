// 値がNaNかつ数値型がどうかを調べる(isNaN)

// console.log(NaN == NaN);
// >> false

// console.log(NaN === NaN);
// >> false

// Number.isNaN(NaN);
// >> true

// Number.isNaN(0 / 0);
// >> true

// Number.isNaN('Hello');  // 数値に変換すると NaN
// >> false

// Number.isNaN(undefined);  // 数値に変換すると NaN
// >> false

// Number.isNaN({a:'10'});  // 数値に変換すると NaN
// >> false

// isNaN関数とNumber.isNaNメソッドの違い(isNaN)
// isNaN(NaN);
// >> true
// Number.isNaN(NaN);
// >> true

// isNaN(0 / 0);
// >> true
// Number.isNaN(0 / 0);
// >> true

// isNaN('Hello');
// >> true
// Number.isNaN('Hello');
// >> false

// isNaN(undefined);
// >> true
// Number.isNaN(undefined);
// >> false

// isNaN({a:'10'});
// >> true
// Number.isNaN({a:'10'});
// >> false