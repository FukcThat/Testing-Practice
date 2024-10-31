const caesarCipher = (string, key) => {
  let cipher = "";

  // get charcode for each character of the string
  for (let i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);

    // check if the character is a letter
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      let cipheredCode = charCode + key;
      // make sure the charCode wraps around when it reaches end of charCodes
      if (
        (cipheredCode > 90 && string[i] <= "Z") ||
        (cipheredCode > 122 && string[i] <= "z")
      ) {
        cipheredCode -= 26;
      }

      // Turn charCode into a letter and add to cipher
      cipher += String.fromCharCode(cipheredCode);
    } else {
      // If its not a letter, leave as is and add to cipher
      cipher += string[i];
    }
  }

  return cipher;
};

module.exports = caesarCipher;
