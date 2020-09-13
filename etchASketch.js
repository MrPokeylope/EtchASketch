
function getRGBValue(gridCell) {

    let RGB = [];

    if (gridCell.id == 0) {
        for (let i = 0; i < 3; i++) {
            RGB[i] = Math.round(Math.random() * 256);
        }
    }
    else {
        RGB = gridCell.style.backgroundColor;
        // rgb(164, 214, 116)
        
        RGB = RGB.replace('rgb(', '').replace(')', '').split(',');
        
        for (let i = 0; i < 3; i++) {
            RGB[i] -= 26;
        }
    }
    
    ++gridCell.id;
    return `rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`;
}

function createGrid(cellsPerRow) {
    
    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = '';

    let gridWidth = gridContainer.offsetWidth;
    let cellSize = `${gridWidth / cellsPerRow}px`;

    // console.log(`
    // gridWidth: ${gridWidth}
    // cellsPerRow: ${cellsPerRow}
    // cellSize: ${gridWidth / cellsPerRow}
    // `);

    let gridCSS = `repeat(${cellsPerRow}, ${cellSize})`;
    gridContainer.style.gridTemplateColumns = gridCSS;
    gridContainer.style.gridTemplateRows = gridCSS;

    let gridCells = [];

    for (let i = 0; i < Math.pow(cellsPerRow, 2); i++) {
        gridCells[i] = document.createElement('div');
        gridCells[i].classList.add('gridItem');
        gridCells[i].id = '0';

        gridCells[i].addEventListener('mouseenter', () => {
            if (gridCells[i].id < 10)
                gridCells[i].style.backgroundColor = getRGBValue(gridCells[i]);
            else 
                return

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