const reverseString = require("./reverseString");

test("reverses string: cat", () => {
  expect(reverseString("cat")).toBe("tac");
});

test("reverses string: hamster", () => {
  expect(reverseString("wolf")).toBe("flow");
});

test("reverses string: cat", () => {
  expect(reverseString("deer")).toBe("reed");
});
