const container = document.getElementById("container")
const colors  = ["#e8d61f" ,"#8711d8" , "#72ca0e" , "#9b153d","#9b0a98"]

const SQUARES = 600

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover" , () => setColor(square))

    square.addEventListener("mouseout" , () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()

    console.log(color)

    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`

    
}

function removeColor(element) {
element.style.backgroundColor = ""
    element.style.boxShadow = ""
}


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}