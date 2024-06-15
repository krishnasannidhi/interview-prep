const originalArr = [34, 6, 2, 456, 89, 999, 123, 5678, 4];

let largeNumber = originalArr[0];
originalArr.forEach((number) => {
  if (number > largeNumber) {
    largeNumber = number;
  }
});

console.log(largeNumber);
