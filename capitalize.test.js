const capitalize = require("./capitalize");

test("Capitalizes first letter of string: cat", () => {
  expect(capitalize("cat")).toBe("Cat");
});

test("Capitalizes first letter of string: hamster", () => {
  expect(capitalize("hamster")).toBe("Hamster");
});

test("Capitalizes first letter of string: hello world", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
