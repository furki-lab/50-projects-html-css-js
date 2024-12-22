const container = document.querySelector(".container")
const loremURL = "https://picsum.photos/"
const rows = 8

for (let i = 0; i < rows * 3; i++) {
    const img = document.createElement("img")
    img.src = `${loremURL}${getRandomSize()}`
    container.appendChild(img)
    
}

function getRandomSize() {
    return `${getRandomNr()}/${getRandomNr()}`
}


function getRandomNr() {
    return Math.floor(Math.random() * 10 ) + 300 
}