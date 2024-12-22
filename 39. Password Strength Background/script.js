const password = document.getElementById("password")
const bg = document.getElementById("background")

password.addEventListener("input" , (e) => {
    const input = e.target.value
    console.log(input)
    bg.style.filter = `blur(${20 - input.length * 2}px)`
})