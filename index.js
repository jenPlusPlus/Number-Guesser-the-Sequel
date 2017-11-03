function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumber = getRandomIntInclusive(1, 100);
console.log('randomNumber: ', randomNumber);

const guessInputField = document.getElementById('guess');
const submitButton = document.getElementById('submit');

const display = () => {
  const body = document.querySelector('body');
  const newDiv = document.createElement('div');
  const compareResults = document.createTextNode(compareNumbers());
  newDiv.appendChild(compareResults);
  body.appendChild(newDiv);

}

const compareNumbers = () => {
  if (guessInputField.value < randomNumber) {
    return guessInputField.value + ' is too low!';
  }
  else if (guessInputField.value > randomNumber) {
    return guessInputField.value + ' is too high!';
  } else {
    return guessInputField.value + ' is correct!';
  }
}

const getGuessInput = (event) => {
  event.preventDefault();
  display();
}



submitButton.addEventListener('click', getGuessInput);
