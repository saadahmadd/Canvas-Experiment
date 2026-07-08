let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

let x
let y
let rectWidth = 100
let rectHeight = 100

let divisionCount = 10
let division = window.innerWidth / divisionCount 

let halfDivision = division / 2;
let temp = halfDivision;

console.log(window.innerWidth)

for (i = 0; i < divisionCount; i++) {
    console.log(division * i + halfDivision)
    c.beginPath()
    c.fillRect((division * i + halfDivision) - rectWidth/2, innerHeight - rectHeight, rectWidth, rectHeight)
    c.fill()
}





