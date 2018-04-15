// curruing with argument binding
function toPowA(a, b) {
  return Math.pow(b, a);
}

const squareA = toPowA.bind(null, 2);
const cubeA = toPowA.bind(null, 3);
const quartA = toPowA.bind(null, 4);

console.log(squareA(5));
console.log(cubeA(3));
console.log(quartA(2));


//another way
function toPowB(a) {
  return function (b) {
    return Math.pow(b, a);
  }
}

const squareB = toPowB(2);
const cubeB = toPowB(3);
const quartB = toPowB(4);

console.log(squareB(5));
console.log(cubeB(3));
console.log(quartB(2));
