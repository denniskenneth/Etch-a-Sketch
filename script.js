const container = document.querySelector('#container');
const resetBtn = document.querySelector('.reset-btn');
const clearBtn = document.querySelector('.clear-btn');


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
    makDiv.addEventListener('mouseenter', colorIn);
    }  
}

/*clearBtn.addEventListener('click', () => {
    const clearRow = document.querySelectorAll('.row');
    clearRow.forEach(div => div.style.backgroundcolor = null);
});*/

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


function colorIn() {
    let currentOpacity = +this.style.opacity;
    if (currentOpacity < 1) currentOpacity += 0.1;
    this.style.opacity = currentOpacity;
  }

mkGrid();
changeColor();
resetBtn.addEventListener('click', gridReset);
//clearBtn.addEventListener('click', clearGrid);