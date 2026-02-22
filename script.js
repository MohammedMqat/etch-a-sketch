// COLOR UTILITES
let chosenMode = "black";
function changeColorMode(mode) {
  if (mode === "black") chosenMode = "black";
  else if (mode === "gray") chosenMode = "gray";
  else if (mode === "rainbow") chosenMode = "rainbow";
  else if (mode === "erase") chosenMode = "erase";
  else throw new Error("chosen mode is not supported");
}

function getRandomColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r},${g},${b})`;
}

function getColorFromMode(mode) {
  switch (mode) {
    case "black":
      return "black";
    case "gray":
      return "gray";
    case "rainbow":
      return getRandomColor();
    case "erase":
      return "";
  }
}

const container = document.getElementById("cell-container");
function createCanvas(cellSize) {
  if (!Number.isInteger(cellSize)) {
    throw new Error("Cellsize is not integer");
  }

  if (cellSize > 100 || cellSize < 2) {
    throw new Error(
      "Cellsize must be between 2 and 100, its currently: " + cellSize
    );
  }

  container.style.gridTemplateColumns = `repeat(${cellSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${cellSize}, 1fr)`;

  function changeCellColor(event) {
    const element = event.target;

    element.style.backgroundColor = getColorFromMode(chosenMode);
  }

  for (let i = 0; i < cellSize ** 2; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    container.appendChild(cellDiv);
    cellDiv.addEventListener("mouseover", changeCellColor);
  }
}
let currentCellSize = 10;

const resizeButton = document.getElementById("resize-btn");
resizeButton.addEventListener("click", function () {
  const resizeInput = document.getElementById("resizebtn");
  const newCanvasSize = parseInt(resizeInput.value);
  currentCellSize = newCanvasSize;
  container.innerHTML = "";
  createCanvas(newCanvasSize);
});

const resetCanvas = document.getElementById("resetbtn");
resetbtn.addEventListener("click", function () {
  container.innerHTML = "";
  createCanvas(currentCellSize);
});
createCanvas(currentCellSize);
