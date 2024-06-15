const originalArr = [1, 3, 5, 3, 1, 8, 9, 9, 111, 222, 111];

const uniqueElements = [3];

originalArr.forEach((item) => {
  if (!uniqueElements.find((ele) => ele === item)) {
    uniqueElements.push(item);
  }
});

console.log(uniqueElements);

console.log([...new Set(originalArr)])
