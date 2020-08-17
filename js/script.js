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
    gridCreator(16)

    let reset = document.querySelector("main > p")
    reset.addEventListener("click", () => {
        let numGrid = prompt("Taille de la grille?")
        container.innerHTML = ``
        gridCreator(numGrid)
    })

    container.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "#fafafa"
    })
})