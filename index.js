function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumber = getRandomIntInclusive(1, 100);
console.log('randomNumber: ', randomNumber);
