const numbers = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5

const [f, , k, ...rest] = numbers;

console.log(f);     // 1
console.log(k);     // 3
console.log(rest);  // [4, 5]d