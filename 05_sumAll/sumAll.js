const sumAll = function (from, to) {
  let sum = 0;
  let smol = from > to ? to : from;
  let big = from > to ? from : to;

  if (
    isNaN(from) ||
    isNaN(to) ||
    !Number.isInteger(from) ||
    !Number.isInteger(to) ||
    from < 0 ||
    to < 0
  ) {
    console.log("ERROR");
    return "ERROR";
  }
  for (let i = smol; i <= big; i++) {
    sum += i;
  }

  console.log(sum);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
