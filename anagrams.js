const firstString = "listen";

const secondString = "slient";

const areAnagrams = (firstString, secondString) => {
  return (
    firstString.split("").sort().join("") ===
    secondString.split("").sort().join("")
  );
};

console.log(areAnagrams(firstString, secondString));
