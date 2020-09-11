
function createGrid(cellsPerRow) {
    
    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = '';

    let gridWidth = gridContainer.offsetWidth;
    let cellSize = `${gridWidth / cellsPerRow}px`;

    console.log(`
    gridWidth: ${gridWidth}
    cellsPerRow: ${cellsPerRow}
    cellSize: ${gridWidth / cellsPerRow}
    `);

    let gridCSS = `repeat(${cellsPerRow}, ${cellSize})`;
    gridContainer.style.gridTemplateColumns = gridCSS;
    gridContainer.style.gridTemplateRows = gridCSS;

    let gridCells = [];

    for (let i = 0; i < Math.pow(cellsPerRow, 2); i++) {
        gridCells[i] = document.createElement('div');
        gridCells[i].classList.add('gridItem');

        gridCells[i].addEventListener('mouseenter', () => {
            gridCells[i].classList.add('touched');
        });

        gridContainer.appendChild(gridCells[i]);
    }
}

function resetGrid() {
    let numCells = prompt("How many cells per row should" + 
                        " the grid have?");

    createGrid(numCells);
}

createGrid(16);

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetGrid);