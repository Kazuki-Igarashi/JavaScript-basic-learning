// 整数がどうかを調べる(isInteger)
Number.isInteger(428);
>> true

Number.isInteger(16.5);
>> true

Number.isInteger(16.0);
>> true

Number.isInteger(NaN);
>> false

Number.isInteger(Infinity);
>> false

Number.isInteger('78');
>> false

Number.isInteger(true);
>> false

Number.isInteger(undefined);
>> false

Number.isInteger([10]);
>> false

// 安全な整数がどうかを調べる(isSafeInteger)
Number.isSafeInteger(87462);
>> true

Number.isSafeInteger(-665212234);
>> true

Number.isSafeInteger(Math.pow(2, 53) - 1);
>> true

Number.isSafeInteger(Math.pow(2, 53));
>> false

Number.isSafeInteger(NaN);
>> false

Number.isSafeInteger(Infinity);
>> false

Number.isSafeInteger('1800');
>> false

Number.isSafeInteger(undefined);
>> false