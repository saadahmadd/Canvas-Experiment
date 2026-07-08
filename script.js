"use strict";

let canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')

let rectWidth;
let rectHeight = 100

let divisionCount = 10
let division = window.innerWidth / divisionCount 

let halfDivision = division / 2;
let temp = halfDivision;

console.log(division)

class Box {
    constructor(height, width, color, amount) {
        this.height = height
        this.width = width
        this.color = color
    }

    draw(iterations) {
        c.beginPath()
        c.strokeStyle = 'red';
        c.strokeRect((division * iterations + halfDivision) - this.width/2, innerHeight - this.height, this.width, this.height)
    }
}

const boxes = new Box(rectHeight, division)

// note: rectangles start x-axis from the left and y-axis from the top, not the center
for (let i = 0; i < divisionCount; i++) {
    boxes.draw(i)
}





