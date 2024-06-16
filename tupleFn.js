const input = `(1,2,3), (4,5,6), (7,8,9)`;

const expectedOutput = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function tuple(input) {
  let actualOutput = [];
  const matchedGroups = input.match(/\([^\)]+\)/g);
  console.log(matchedGroups);

  if (!matchedGroups?.length) {
    return actualOutput;
  }

  actualOutput = matchedGroups.reduce((rows, group) => {
    let row = group.replace(/[\s\(\)]/g, "").split(",");
    console.log("row -->", row);

    row = row.map((r) => Number(r));

    rows.push(row);
    return rows;
  }, []);

  return actualOutput;
}

console.log(tuple(input));

Array.prototype.multiple = (position) => {
    const collection = [];

    const actualPosition = position -1;

    for(let i=0; i<this.length; i++){
        const current = this[i];

        if(Object.prototype.hasOwnProperty.call(current, actualPOsition)){
            collection.push(current[actualPosition])
        }
    }

    return collection.reduce((result, current) => result * current, 1)
}