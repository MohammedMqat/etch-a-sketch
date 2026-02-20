const container = document.getElementById("container");
console.log(container);

const cellSize = 90;

if (!Number.isInteger(cellSize)) {
  throw new Error("Cellsize is not integer");
}

if (cellSize > 100 || cellSize < 2) {
  throw new Error(
    "Cellsize must be between 2 and 100, its currently: " + cellSize
  );
}

for (let i = 0; i < cellSize; i++) {
  const cellDiv = document.createElement("div");
  // cellDiv.textContent = "Cell";
  cellDiv.classList.add("cell");
  container.appendChild(cellDiv);
}

// get dimensions of container 600 * 600
// calculate the width of each cell for all of them to fit perfectly in the container
// modify .cell class to be that width and height
