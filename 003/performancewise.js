mil = 10000000;
arr = Array(mil);

console.time('a');
for (const a of arr) {}
//for (const a of arr) {}
console.timeEnd('a');

console.time('b')

for (let i; i < arr.length; i++) {}


console.timeEnd('b')

console.time('c')

arr.forEach(v => null)

console.timeEnd('c')