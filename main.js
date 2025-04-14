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
            div.setAttribute("class", "grid");
            divLine.appendChild(div);
        }


    }

}



container.addEventListener("mouseover", function (e) {
    e.target.style.background = "blue";
});

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
        }
        else {
            under100 = false;
        }
        
    } while (!under100);

});



