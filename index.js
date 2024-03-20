
const getColorButton = document.getElementById("color-scheme-btn")
const colorsHolder = document.getElementById("color-container")
const chosenColorScheme = document.getElementById("dropdown")

let selectedColor = "000000"
let selectedScheme = "monochrome"

chosenColorScheme.addEventListener("change", function(){
    selectedScheme = chosenColorScheme.value
})

document.getElementById("choose-color").addEventListener("change", function(){
    selectedColor = this.value
})


getColorButton.addEventListener("click", function(){
    console.log("this is color: " + selectedColor.substring(1))
    selectedColor = selectedColor.substring(1)
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&format=json&mode=${selectedScheme}&count=6`)
    .then(res => res.json())
    .then(
        data => { 
            console.log(data),
            renderColors(data)
        }
    )
})

function renderColors(theData){
    let colorsArray = theData.colors
    console.log(colorsArray)
    colorsHolder.innerHTML = ""
    for(let color of colorsArray){
        console.log(color.rgb.value)

        const parentDiv = document.createElement("div")
        const colorDiv = document.createElement("div")
        const textOfColor = document.createElement("p")
        textOfColor.innerHTML = color.hex.value
        parentDiv.classList.add("one-color")
        textOfColor.classList.add("text-of-color")


        colorDiv.style.backgroundColor = color.rgb.value
        parentDiv.appendChild(colorDiv)
        parentDiv.appendChild(textOfColor)
        colorsHolder.appendChild(parentDiv)
        console.log(parentDiv)
    }
    colorsArray = []
}


function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}