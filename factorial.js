const factorial = (number) => {
  if (number === 0 || number === 1) return 1;

  return  number * factorial(number - 1);
};

console.log(factorial(5));

console.log(factorial(8))
console.log(factorial(2))