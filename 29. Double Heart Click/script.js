const loveMe = document.querySelector(".loveMe")
const times = document.querySelector("#times")

let ClickTime = 0
let timesClicked = 0

loveMe.addEventListener("click" , (e) => {
    if (ClickTime === 0) {
        ClickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - ClickTime ) < 800) {
            createHeart(e)
        ClickTime = 0 
           
    } else {
        ClickTime=new Date().getTime()
    } }
    

} )

function createHeart(e) {
    const heart = document.createElement("i")
    heart.classList.add("fas")
    heart.classList.add("fa-heart")

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

     heart.style.top = `${yInside}px`
     heart.style.left = `${xInside}px`
    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(),2000)
    

}


