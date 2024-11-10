const removeFromArray = function (arr, ...args) {
  let newArr = [];
  let banned = args;

  for (const i of arr) {
    if (banned.includes(i)) continue;
    newArr.push(i);
  }
  console.log(newArr);
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
