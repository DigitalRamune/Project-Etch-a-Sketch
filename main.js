const container = document.querySelector(".container");
const btn = document.querySelector(".btn");


let height;
let width;

function createGrid() {
    for (let i = 0; i < height; i++) {
        const divLine = document.createElement("div");
        divLine.setAttribute("class", "gridLine");
        container.appendChild(divLine);

        for (let x = 0; x < width; x++) {
            const div = document.createElement("div");
            const gridWidth = 750 / width;
            div.setAttribute("class", "grid");
            div.setAttribute("style", `width: ${gridWidth}px;`);
            divLine.appendChild(div);
        }


    }

}

var randomColor = Math.floor(Math.random()*16777215).toString(16);

function randomHexColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var randomColorString = `#${randomColor}`;
    return randomColorString;
}


let under100;

btn.addEventListener("click", () => {
    do {
        height = Number(prompt("Number of squares per column ?"));
        width = Number(prompt("Number of squares per line ?"));
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        if (height <= 100 && width <= 100) {
            createGrid(); 
            under100 = true;

            container.addEventListener("mouseover", function (e) {
                e.target.style.background = randomHexColor();
            });
        }
        else {
            under100 = false;
        }
        
    } while (!under100);

});



