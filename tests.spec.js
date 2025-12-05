import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./script";

test("barry becomes Barry", () => {
  expect(capitalize("barry")).toBe("Barry");
});

test("Barry becomes yrraB", () => {
  expect(reverseString("Barry")).toBe("yrraB");
});

test("2 plus 2 equal 4, 46 minus 8 equals 38, 55 divided by 5 equals 11, 9 times 4 equals 36", () => {
  const calculator = new Calculator();
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.subtract(46, 8)).toBe(38);
  expect(calculator.divide(55, 5)).toBe(11);
  expect(calculator.multiply(9, 4)).toBe(36);
});

test("Return string with each character shifted by 3", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("abc", 26)).toBe(
    "shift factor cannot be greater than 25"
  );
});

test("Return average, min, max and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
