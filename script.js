const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

function createGrid(size) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor();
    });
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function promptForGridSize() {
  let size;
  do {
    size = parseInt(prompt("Enter the number of squares per side (max 100):"));
  } while (isNaN(size) || size < 1 || size > 100);
  createGrid(size);
}

// Initial grid size
createGrid(16);

// Button to change grid size
const gridSizeButton = document.createElement("button");
gridSizeButton.textContent = "Change Grid Size";
gridSizeButton.addEventListener("click", promptForGridSize);
document.body.appendChild(gridSizeButton);

// Style the container and squares
const style = document.createElement("style");
style.textContent = `
body {
  display: grid;
  place-content: center;
  gap: 2rem;
  padding: 0 3rem;
  scroll-behavior: smooth;
  grid-template-rows: auto 1fr;
  background: #eef;
}
h1 {
  text-align: center;
  font-size: 2.5rem;
  color: gray;
}
.container {
  display: grid;
  border: 1px solid gray;
  width: 90vw;
  height: 90vw;
  max-width: 700px;
  max-height: 700px;
}
.square {
  border: 1px solid #ccc;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
}
.square:hover {
  cursor: pointer;
}
.button-container {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 40px;
  /* padding-top: 2rem; */
  /* padding-bottom: 2rem; */
  /* grid-row: 2; */
}
button {
font-size: 18px;
  padding: 1rem 2rem;
  background: grey;
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  color: gray;
  background: white;
  border: 2px solid gray;
}

`;
document.head.appendChild(style);

// Reset button
const resetButton = document.createElement("button");
resetButton.textContent = "Reset Grid";
resetButton.addEventListener("click", () => {
  createGrid(16);
});
document.body.appendChild(resetButton);

// Change background color button
const bgColorButton = document.createElement("button");
bgColorButton.textContent = "Change Background Color";
bgColorButton.addEventListener("click", () => {
  const newColor = prompt(
    "Enter a new background color (e.g., 'red', '#ff0000'):"
  );
  if (newColor) {
    container.style.backgroundColor = newColor;
  }
});
document.body.appendChild(bgColorButton);

// Toggle grid lines button
const toggleGridButton = document.createElement("button");
toggleGridButton.textContent = "Toggle Grid Lines";
toggleGridButton.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.border = square.style.border ? "" : "1px solid #ccc";
  });
});
document.body.appendChild(toggleGridButton);

// (Optional) Add more features here if needed
// Make the grid responsive for mobile and tablet
