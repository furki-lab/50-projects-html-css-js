const newColor = document.getElementById("new-color-button")
const currentColor = document.getElementById("current-color")

const hexValues = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function getRandomHexValue(){
    const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
    console.log(hexValues.length)
    const randomHexValue = hexValues[randomIndexPosition]
    
    return randomHexValue
    
}

function getRandomHexString(stringlength){
    let hexString = "";
    for( let i = 0 ; i < stringlength; i++){
        hexString += getRandomHexValue();
    }
    return hexString;
}

newColor.addEventListener("click",() => {
    const randomHexString = "#" + getRandomHexString(6);
    document.body.style.setProperty("background-color",randomHexString)
    currentColor.innerText = randomHexString
})

