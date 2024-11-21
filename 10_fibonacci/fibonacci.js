const fibonacci = function (n) {
  precedingOne = 0;
  precedingTwo = 1;
  total = 0;

  if (Number(n) === 0) return 0;
  if (Number(n) === 1) return 1;
  if (Number(n) < 0) return "OOPS";

  for (let i = 2; i <= Number(n); i++) {
    total = precedingOne + precedingTwo;
    precedingOne = precedingTwo;
    precedingTwo = total;
  }

  return total;
};

// Do not edit below this line
module.exports = fibonacci;
