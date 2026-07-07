let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

let x
let y
let rectWidth
let rectHeight

let divisionCount = 10
let divisions = []

for (i = 1; i <= divisionCount; i++) {
    divisions.push(window.innerWidth/divisionCount) // divide the page into 10 equal parts
}

let points = []
let halfDivision = divisions[0] / 2



for (i = 0; i < divisionCount; i++) {
    points.push(divisions[i] * i)
}

for (i = 0; i < divisionCount; i++) {
    c.beginPath()
    c.fillRect(points[i], innerHeight - 100, 100, 100)
}





