
function createGrid(totalCells) {
    
    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = '';
    // let gridMaxColumns = Math.floor(Math.sqrt(totalCells));
    // console.log(gridMaxColumns);

    gridContainer.gridTemplateColumns = `repeat(${totalCells}, 1fr)`;
    gridContainer.gridTemplateRows = `repeat(${totalCells}, 1fr)`;

    let gridCells = [];

    let findSize = Math.floor(Math.random() * totalCells) + 1;
    console.log(findSize);

    for (let i = 0; i < totalCells; i++) {
        gridCells[i] = document.createElement('div');
        gridCells[i].classList.add('gridItem');

        // gridCells[i].style.gridColumn = Math.floor()

        gridCells[i].addEventListener('mouseenter', () => {
            gridCells[i].classList.add('touched');
        });

        gridContainer.appendChild(gridCells[i]);
    }
}

function resetGrid() {
    const gridItems = document.querySelectorAll('.gridItem');

    gridItems.forEach(cell => {
        cell.classList.remove('touched');
    });

    let numCells = prompt("How many squares per side should" + 
                        " the new grid have?");

    createGrid(numCells);
}

createGrid(16);

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', resetGrid);