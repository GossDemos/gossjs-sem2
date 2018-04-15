sum = (x, y) => (y === 0) ? x : sum (++x, --y);

console.log(sum(2, 3));
console.log(sum(0, 3));
console.log(sum(10, 0));
console.log(sum(0, 0));
