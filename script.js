const container = document.getElementById('container');


function mkGrid() {
    container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16,3fr);grid-template-rows: repeat(16, 3fr);');

    let i;    
    for (i=0; i < (16 * 16); i++){
    const makDiv = document.createElement('div');
    makDiv.className = 'row';
    makDiv.setAttribute('style', 'border: 1px solid black');
    container.appendChild(makDiv);
    }  
}

let colors = function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;    
  }

const colorGrid = (colors) => {
    let gridColor = document.getElementsByClassName('row');
    for (let row of gridColor) {
        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = colors;
        });
    }

}

mkGrid();
getRandomColor();

