"use strict";

let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

let rectWidth;
let rectHeight = 100

let boxCount = 20
let division = window.innerWidth / boxCount 

let halfDivision = division / 2;
let temp = halfDivision;

function randomColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

class Box {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    draw(iterations) {
        c.beginPath()
        c.fillStyle = randomColor()
        c.fillRect((division * iterations + halfDivision) - this.width/2, innerHeight - this.height, this.width, this.height)
        c.fill()
    }
}

const boxes = new Box(rectHeight, division)

// note: rectangles start x-axis from the left and y-axis from the top, not the center
for (let i = 0; i < boxCount; i++) {
    boxes.draw(i)
}





