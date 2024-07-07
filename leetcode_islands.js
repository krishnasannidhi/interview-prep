var numIslands = function (grid) {
  const visited = grid.map((row) => row.map((cell) => false));
  //console.log("visited", visited);

  let islandcount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (depthForSearch(i, j, grid, visited)) {
        islandcount++;
      }
    }
  }

  return islandcount;
};

function depthForSearch(i, j, input, visited) {
  const stack = [[i, j]];

  let islandSize = 0;

  while (stack.length) {
    let currentNode = stack.pop();

    let [i, j] = currentNode;

    //verify if visited at i and j
    if (visited[i][j]) continue;
    visited[i][j] = true;

    //console.log("visited", visited);

    //verify if cell is part of an island
    if (input[i][j] === "0") continue;
    islandSize++;

    let adjNeighbors = getAdjNeighbors({ i, j, input, visited });

    stack.push(...adjNeighbors);
  }

  return islandSize > 0 ? true : false;
}

function getAdjNeighbors({ i, j, input, visited }) {
  const adjNeighbors = [];

  if (i > 0 && !visited[i - 1][j]) adjNeighbors.push([i - 1, j]);
  if (i < input.length - 1 && !visited[i + 1][j]) adjNeighbors.push([i + 1, j]);

  if (j > 0 && !visited[i][j - 1]) adjNeighbors.push([i, j - 1]);
  if (j < input[0].length - 1 && !visited[i][j + 1])
    adjNeighbors.push([i, j + 1]);

  return adjNeighbors;
}

const input1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const input2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];

console.log(numIslands(input1));


console.log(numIslands(input2));
