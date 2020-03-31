const container = document.querySelector('#container');

const grid = document.createElement('div');
grid.style.display = 'grid';
grid.style.gridTemplateColumns = 'repeat(16, 1rem)';
grid.style.gridTemplateRows =  'repeat(16, 1rem)';
grid.style.gridGap = '4px';
grid.style.border = '2px solid grey';
grid.addEventListener('mouseover', (e) => {
        event.target.style.backgroundColor = 'red'
    } )

container.appendChild(grid);
