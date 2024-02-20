console.log(20n + 38n);
>> 58n
console.log(45n - 16n);
>> 29n
console.log(8n * 7n);
>> 56n
console.log(34n / 8n);
>> 4n
console.log(34n % 8n);
>> 2n
console.log(9n ** 3n);
>> 729n

console.log(54n == 54n);
>> true

console.log(54n == 48n);
>> false

console.log(38n === 38n);
>> true

console.log(54 == 54n);
>> true

console.log(54 === 54n);
>> false

console.log(12n > 28n);
>> false

console.log(34n <= 48n);
>> true

console.log(14 < 32n);
>> true

console.log(33n >= 41);
>> false

let num = 15n;

num++;
console.log(num);
>> 16n

--num;
console.log(num);
>> 15n