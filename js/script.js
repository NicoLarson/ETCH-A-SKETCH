const container = document.querySelector('#container');
const content = document.createElement('div');



// creation grille 16x16 divs carrés  + survol des divs

let createSquare = (quantity = 16) => {
    for (i = 0; i < quantity ** 2; i++) {
        const content = document.createElement('div');
        content.classList.add('square')
        content.setAttribute('style', 'display: grid; margin: 0.1rem; background: #666; width: 4rem; height: 4rem')
        content.addEventListener("mouseenter", (e) => {
            e.target.style.background = "red"
        })
        container.appendChild(content)
    }
}
container.setAttribute('style', 'display: grid;')
createSquare()

// Changement de couleur
function createColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Bouton pour restet la grille



/*