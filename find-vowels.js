const originalString = "Hello World!";
const VOWELS = ["a", "e", "i", "o", "u"];
const vowlesArr = [];

originalString.split("").forEach((item) => {
  if (VOWELS.includes(item?.toLowerCase())) {
    vowlesArr.push(item);
  }
});

console.log(vowlesArr.length);
