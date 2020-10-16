const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetGrid);

createGrid(16);

function resetGrid() {
    let numCells = prompt("How many cells per row should the grid have? (Max is 100)");

    if (numCells > 100) {
        alert("Max number of cells is 100! Making a 100 cell grid...");
        createGrid(100);
    } else {
        createGrid(numCells);
    }
}

function getRGBValue(gridCell) {

    let RGB = [];

    // format gridCell with initial color values
    if (gridCell.id == 0) {

        // get random RGB values for background color
        for (let i = 0; i < 3; i++) {
            RGB[i] = Math.round(Math.random() * 256);
        }

        let reduceAmt = [];

        // find amount to reduce each color by (10%)
        for (let i = 0; i < 3; i++) {
            reduceAmt[i] = Math.round(RGB[i] * .10);
        }
    
        gridCell.setAttribute('data-reduce', `${reduceAmt[0]},${reduceAmt[1]},${reduceAmt[2]}`);

    } else {

        // get background color
        // ex: rgb(164, 214, 116)
        RGB = gridCell.style.backgroundColor;
        RGB = RGB.replace('rgb(', '').replace(')', '').split(',');

        // get reduce percentage
        let reduceAmt = gridCell.getAttribute('data-reduce');
        reduceAmt = reduceAmt.split(',');
        
        for (let i = 0; i < 3; i++) {
            RGB[i] -= reduceAmt[i];
        }
    }
    
    ++gridCell.id;
    return `rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`;
}

function createGrid(cellsPerRow) {

    const grid = document.getElementById('grid');

    // clear the grid, if one already exists
    if (grid.innerHTML !== '')
        grid.innerHTML = '';

    let gridWidth = grid.offsetWidth;
    let gridHeight = grid.offsetHeight;
    
    let cellSize = `${gridWidth / cellsPerRow}px`;

    console.log(`Before:
    gridWidth: ${gridWidth}
    gridHeight ${gridHeight}
    cellSize: ${cellSize}
    `);

    let gridCSS = `repeat(${cellsPerRow}, ${cellSize})`;
    grid.style.gridTemplateColumns = gridCSS;
    grid.style.gridTemplateRows = gridCSS;

    let gridCells = [];

    for (let i = 0; i < Math.pow(cellsPerRow, 2); i++) {
        gridCells[i] = document.createElement('div');
        gridCells[i].classList.add('gridItem');
        gridCells[i].id = '0';

        gridCells[i].addEventListener('mouseenter', () => {
            if (gridCells[i].id <= 10) {
                gridCells[i].style.backgroundColor = getRGBValue(gridCells[i]);
            } else {
                return;
            }
        });

        grid.appendChild(gridCells[i]);
    }
}
