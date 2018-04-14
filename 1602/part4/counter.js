function counter(n) {
  return function() { return ++n}
}

const counter1 = counter(3)

console.log(counter1())
console.log(counter1())
console.log(counter1())

