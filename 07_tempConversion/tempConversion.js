const convertToCelsius = function (degrees) {
  let converted = ((degrees - 32) * 5) / 9;
  if (!Number.isInteger(converted)) {
    converted = parseFloat(converted).toFixed(1);
  }

  console.log(converted);
  return Number(converted);
};

const convertToFahrenheit = function (degrees) {
  let converted = degrees * (9 / 5) + 32;

  if (!Number.isInteger(converted)) {
    converted = parseFloat(converted).toFixed(1);
  }

  console.log(converted);
  return Number(converted);
};

// well there's nothing like the solution lol...

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
