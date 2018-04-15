function numPow(pow) {
  return Math.pow(this, pow);
}

const e = Math.E;
const pi = Math.PI;
const ln = Math.LN2;

const ePow = numPow.bind(e);
const piPow = numPow.bind(pi);
const lnPow = numPow.bind(ln);

console.log(ePow(2));
console.log(piPow(3));
console.log(lnPow(10));

