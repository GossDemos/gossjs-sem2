randomRGB = () => Math.floor(Math.random() * 255);

makeColor = (r = randomRGB(), g = randomRGB(), b = randomRGB()) => {
  return `rgb(${r}, ${g}, ${b})`;
}

console.log('Default random: ', makeColor())
console.log('Passed args: ', makeColor(123, 32, 12))
