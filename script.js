const container = document.querySelector(".container");
const reset = document.querySelector(".reset");
const newGrid = document.querySelector(".new-grid");

let sqNum = 16;

// Grid creation
function createGrid(sqNum) {
    const tempContainer = document.createElement("div");
    tempContainer.classList.add ("temp-container");

    for (let i = 0; i < sqNum; i++) {
        const row = document.createElement('div');
        row.classList.add("row-grid");

        for (let j = 0; j < sqNum; j++) {
            const squareSize = 960 / sqNum;
            const box = document.createElement('div');
            box.classList.add("square");

            box.style.width = `${squareSize}px`
            box.style.height = `${squareSize}px`

            // Drawing event
            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = "black";
            });

            row.appendChild(box);
        }
        tempContainer.appendChild(row);
    }
    container.appendChild(tempContainer);
}

// Reset grid, no prompt
reset.addEventListener("click", () => {
    const deleteRow = document.querySelector('.temp-container');
    deleteRow.remove();
    createGrid(sqNum);
})

// Create new grid of different size via prompt
newGrid.addEventListener("click", () => {
    let gridSize = Number(prompt("Set grid size (and press enter)"));

    while(gridSize > 100) {
        gridSize = Number(prompt("Size must be lower than 100"));
    }
    const deleteRow = document.querySelector('.temp-container');
    deleteRow.remove();
    sqNum = gridSize;
    createGrid(gridSize);
})

// Initial grid creation
createGrid(16);