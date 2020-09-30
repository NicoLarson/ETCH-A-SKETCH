document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector("#container")

    let gridCreator = (gridSize, line = "") => {
        for (let i = 0; i < gridSize; i++) {
            line += "<div></div>"
        }
        for (let column = 0; column < gridSize; column++) {
            container.innerHTML += line
            container.innerHTML += `<br/>`
        }
    }
    gridCreator(12)

    let cell = 19.2
    
    let reset = document.querySelector("main > p")
    reset.addEventListener("click", () => {
        let numGrid = prompt("Taille de la grille?")
        if (numGrid*cell > screen.width || numGrid > 90) {
            alert('La taille de la grille est trop grande. Veuillez saisir un nombre plus petit.')
                ()
        }
        container.innerHTML = ``
        gridCreator(numGrid)
    })

    container.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "#fafafa"
    })
})