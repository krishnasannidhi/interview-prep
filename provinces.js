//a province is a group of directly or indiretly conencted cities and no other cities outside of the group.

//you are given an nxn matrix isConnected where isConnected[i][j] =1 if the ith city and the jth city are directly
//connected, and isConnected[i][j] = 0 otherwise

//return the total no of provinces

const findProvinces = (isConnected) => {
  const adjacentList = buildAdjList(isConnected);
  const visited = {};
  let provinces = 0;

  for (let vertex = 0; vertex < adjacentList.length; vertex++) {
    if (!visited[vertex]) {
      provinces++;

      depthForSearch(vertex, adjacentList, visited);
    }
  }

  return provinces;
};

const depthForSearch = (node, adjacentList, visited) => {
  visited[node] = true;

  for (let neighbor of adjacentList[node]) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      depthForSearch(neighbor, adjacentList, visited);
    }
  }
};

const buildAdjList = (edges, n = edges.length) => {
  const adjList = Array.from({ length: n }, () => []);

  for (let i = 0; i < edges.length; i++) {
    adjList[i].push(...getEdges(i, edges[i]));
  }

  return adjList;
};

const getEdges = (index, edge) => {
  const edges = [];

  for (let i = 0; i < edge.length; i++) {
    if (index === i) continue;
    if (edge[i] === 0) continue;
    edges.push(i);
  }

  return edges;
};

console.log(
  findProvinces([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

console.log(findProvinces([1, 0, 0], [0, 1, 0], [0, 0, 1]));
