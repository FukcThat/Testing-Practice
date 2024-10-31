const caesarCipher = require("./caesarCipher");

test("ciphers string with key 1 of: Hello, World!", () => {
  expect(caesarCipher("Hello, World!", 1)).toBe("Ifmmp, Xpsme!");
});

test("ciphers string with key 20 of: Hello, WorlD!", () => {
  expect(caesarCipher("Hello, WorlD!", 20)).toBe("Byffi, QilfX!");
});
