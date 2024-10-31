const calculator = require("./calculator");

// Add
test("Add: adds two numbers together and returns sum: 2+3 = 5", () => {
  expect(calculator.add(2, 3)).toEqual(5);
});

test("Add: adds two numbers together and returns sum: 29+6 = 35", () => {
  expect(calculator.add(29, 6)).toEqual(35);
});

//Subtract
test("Subtract: subtracts one number from another and returns result: 5-3 = 2", () => {
  expect(calculator.subtract(5, 3)).toEqual(2);
});

test("Subtract: subtracts one number from another and returns result: 5-10 = -5", () => {
  expect(calculator.subtract(5, 3)).toEqual(2);
});

// Divide
test("Divide: divides one number by another and returns result: 6/3 = 2", () => {
  expect(calculator.divide(6, 3)).toEqual(2);
});

test("Divide: divides one number by another and returns result: 15/2 = 7.5", () => {
  expect(calculator.divide(15, 2)).toEqual(7.5);
});

// Multiply
test("Multiply: multiplies two numbers together and returns result: 2*3 = 6", () => {
  expect(calculator.multiply(2, 3)).toEqual(6);
});

test("Multiply: multiplies two numbers together and returns result: 101*9 = 909", () => {
  expect(calculator.multiply(101, 9)).toEqual(909);
});
