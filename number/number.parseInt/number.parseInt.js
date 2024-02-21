Number.parseInt('42', 10);
>> 42

Number.parseInt('  -84cm', 10);
>> -84

Number.parseInt('3FDCKA', 16);
>> 16348  // 16 進数で 0x3FDC

Number.parseInt('10010', 2);
>> 18

Number.parseInt('4010', 2);
>> NaN