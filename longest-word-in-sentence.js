//find the longest word in the given sentence

const originalSentence =
  "exports grew 9%, but trade gap widended to 7-month high in May.";

let longestWord = "";

originalSentence.split(" ").forEach((item) => {
  if (item.length > longestWord.length) {
    longestWord = item;
  }
});

console.log("longestWord --->", longestWord);
