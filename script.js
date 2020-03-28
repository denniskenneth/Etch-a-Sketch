const container = document.querySelector('#container');
const resetBtn = document.querySelector('.reset-btn')


function mkGrid(size) {
    let i;
    if (isNaN(size) || size < 0) 
    {
        size = 16;
    }
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (i=0; i < (size * size); i++){
    const makDiv = document.createElement('div');
    makDiv.className = 'row';
    makDiv.setAttribute('style', 'border: 1px solid black');
    container.appendChild(makDiv);
    }  
}

function clearGrid() {
    const getDiv = document.querySelectorAll('.row');
    getDiv.forEach(div => {
        container.removeChild(div);
    });
}

function changeColor() {
    const divs = document.querySelectorAll('.row');
    divs.forEach(div => {
        div.addEventListener('mouseover', (e) =>{
            div.classList.add('colorchange');
        })
    })
}

function gridReset() {
    let size = prompt('How many squares per side to make the new grid');
    clearGrid();
    mkGrid(size);
    changeColor();
}

mkGrid();
changeColor();
resetBtn.addEventListener('click', gridReset);