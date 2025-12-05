function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

class Calculator {
  add(n1, n2) {
    return n1 + n2;
  }

  subtract(n1, n2) {
    return n1 - n2;
  }

  divide(n1, n2) {
    return n1 / n2;
  }

  multiply(n1, n2) {
    return n1 * n2;
  }
}

function caesarCipher(str, shiftFactor) {}

function analyzeArray() {}

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
