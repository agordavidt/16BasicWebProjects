const containerEl = document.querySelector(".container");

for(let index=0; index < 30; index++){
    const colorContainerEl = document.createElement("div")
    colorContainerEl.classList.add("color_container");

    containerEl.appendChild(colorContainerEl)
}

const colorContainerEls = document.querySelector(".color_container");

generateColors();

function generateColors(){
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;

    });
}

randomColor();

function randomColor(){
    const chars = "01234567891bcdef"
    const colorCodeLength = 6;
    let colorCode = ""
    for (let index = 0; index < colorCodeLength; index++){
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
        return colorCode;
    };
}