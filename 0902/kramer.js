const [a1, b1, c1, a2, b2, c2] = [1, 3, 2, 9, 2, 7];

const d1 = a1*b2 - b1*a2;
const d2 = c1*b2 - b1*c2;
const d3 = a1*c2 - c1*a2;

const x1 = d2/d1;
const x2 = d3/d1;

console.log(`x1: ${x1}, x2: ${x2}`);
