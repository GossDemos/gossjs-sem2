console.time('3');
console.time('7');
console.time('10');

setTimeout(() => {
  console.timeEnd('3');
  setTimeout(() => {
    console.timeEnd('7');
    setTimeout(() => {
      console.timeEnd('10');
    }, 10000)
  }, 7000)
}, 3000)
