const container = document.querySelector(".container");

let sqNum = 16;

// Grid creation
function createGrid(sqNum) {
    for (let i = 0; i < sqNum; i++) {
        const row = document.createElement('div');
        row.classList.add("row-grid");

        for (let j = 0; j < sqNum; j++) {
            const squareSize = 540 / sqNum;
            const box = document.createElement('div');
            box.classList.add("square");

            box.style.width = `${squareSize}px`
            box.style.height = `${squareSize}px`

            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = "black";
            });

            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

createGrid(16);