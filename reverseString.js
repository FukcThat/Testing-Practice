const reverseString = (string) => {
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let joinString = reverseArray.join("");
  return joinString;
};

module.exports = reverseString;
