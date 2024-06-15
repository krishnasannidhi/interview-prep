const originalString = "racecar";

const isPalindrome = (originalString) => {
  if (!originalString) {
    return false;
  }

  return originalString.split("").reverse().join("") === originalString;
};

console.log(isPalindrome(originalString));


console.log(isPalindrome("krishna"));


console.log(isPalindrome("racecar racecar"));
