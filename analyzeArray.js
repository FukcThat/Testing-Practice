const analyzeArray = (array) => {
  // Avarage
  let average =
    array.reduce(
      (sumOfPrevious, currentNumber) => sumOfPrevious + currentNumber
    ) / array.length;

  // Min
  const min = Math.min(...array);

  // Max
  const max = Math.max(...array);

  // Length
  const length = array.length;

  // Return analyzed Object
  return { average, min, max, length };
};

module.exports = analyzeArray;
