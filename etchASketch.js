const gridContainer = document.getElementById('grid');

function createGrid() {

    let divArray = [];

    for (let i = 0; i < 16; i++) {
        divArray[i] = document.createElement('div');
        divArray[i].classList.add('gridItem');
        divArray[i].textContent = i+1;
        gridContainer.appendChild(divArray[i]);
    }
}


createGrid();
