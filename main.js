const container = document.querySelector(".container");

function createGrid() {
    for (let i = 0; i < 20; i++) {
        const divLine = document.createElement("div");
        divLine.setAttribute("class", "gridLine");
        container.appendChild(divLine);

        for (let x = 0; x < 20; x++) {
            const div = document.createElement("div");
            div.setAttribute("class", "grid");
            divLine.appendChild(div);
        }

        // container.appendChild(div);

    }

}

createGrid();

container.addEventListener("mouseover", function (e) {
  e.target.style.background = "blue";
});