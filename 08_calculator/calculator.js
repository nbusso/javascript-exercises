const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  console.log(numbers);
  return numbers.reduce((total, number) => (number += total), 0);
};

const multiply = function (numbers) {
  return numbers.reduce((total, number) => (number *= total), 1);
};

const power = function (base, power) {
  return base ** power;
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  }

  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
