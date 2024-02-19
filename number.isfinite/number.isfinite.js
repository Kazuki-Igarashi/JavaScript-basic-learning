// 値が有限かつ数値型がどうかを調べる(isFinite)

// Number.isFinite(Infinity);
// >> false

// Number.isFinite(-Infinity);
// >> false

// Number.isFinite(NaN);
// >> false

// Number.isFinite(442);
// >> true

// Number.isFinite(0);
// >> true

// Number.isFinite(-1.225e-3);
// >> true

// Number.isFinite('78');
// >> false

// Number.isFinite(true);
// >> false

// Number.isFinite(undefined);
// >> false

// Number.isFinite([10, 20]);
// >> false

// isFinite関数とNumber.isFiniteメソッドの違い
// isFinite(128);
// >> true
// Number.isFinite(128);
// >> true

// isFinite(Infinity);
// >> false
// Number.isFinite(Infinity);
// >> false

// isFinite('78');
// >> true
// Number.isFinite('78');
// >> false

// isFinite('');
// >> true
// Number.isFinite('');
// >> false

// isFinite(true);
// >> true
// Number.isFinite(true);
// >> false

// isFinite(null);
// >> true
// Number.isFinite(null);
// >> false

// isFinite([10]);
// >> true
// Number.isFinite([10]);
// >> false