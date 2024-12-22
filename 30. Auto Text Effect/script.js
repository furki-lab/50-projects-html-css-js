const textEl = document.getElementById("text")
const speedEl = document.getElementById("speed")
const writing = document.getElementById("writing")
const colorPick = document.getElementById("favcolor")





let idx = 1 
let speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.style.textTransform = "capitalize"
    textEl.style.color = colorPick.value
    textEl.innerText = writing.value.slice(0 , idx)
    idx++

    if(idx > writing.value.length) {
        idx = 1
    }

    setTimeout(writeText ,speed)
}


speedEl.addEventListener("input" , (e) => speed = 300 / e.target.value)