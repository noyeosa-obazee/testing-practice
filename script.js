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

function caesarCipher(str, shiftFactor) {
  if (shiftFactor > 25) {
    return "shift factor cannot be greater than 25";
  }
  let result = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i].toLowerCase())) {
      const index = alphabet.indexOf(str[i].toLowerCase()) + shiftFactor;
      if (str[i] === str[i].toUpperCase()) {
        result += alphabet[index].toUpperCase();
      } else {
        result += alphabet[index];
      }
    } else {
      result += str[i];
    }
  }

  return result;
}

function analyzeArray(arr) {
  return {
    average: arr.reduce((sum, cur) => sum + cur, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

export { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
