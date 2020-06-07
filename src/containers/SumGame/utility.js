const getRandomNumber = (numMin, numMax) => Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

export const getNumbers = gameSize => {
  const numbersArray = [];
  const minNumber = 1;
  const maxNumber = 9;

  for (let i = 0; i < gameSize; i++) {
    numbersArray.push(getRandomNumber(minNumber, maxNumber));
  }

  return numbersArray;
}

export const calculateSum = numbersArr => {
  let sum = 0;
  let numMax = 5;

  for (let i = 0; i <= numbersArr.length; i++) {
    const tempNumberPosition = getRandomNumber(0, numMax);
    sum += numbersArr[tempNumberPosition];
    numbersArr.splice(tempNumberPosition, 1);
    numMax -= 1;
  }

  return sum;
}