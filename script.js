let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

function Circle(x, y, radius, dx, dy) {
    this.x = x
    this.y = y
    this.radius = radius
    this.dx = dx
    this.dy = dy

    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.stroke()
    }

    this.position = function() {
        return {X: this.x, Y: this.y}
    }

    this.bounce = function() {
        this.dx = -this.dx
        this.dy = -this.dy
    }

    this.update = function() {
        this.x += this.dx
        this.y += this.dy

        if (((this.x + this.radius) > innerWidth) || ((this.x - this.radius) < 0)) {
            this.dx = -this.dx
        }

        if (((this.y + this.radius) > innerHeight) || ((this.y - this.radius) < 0)) {
            this.dy = -this.dy
        }
        
        this.draw()
    }
}

let radius = 30
let posI;
let posQ;
let distance;
let circleArray = [];

for (i = 0; i <= 5; i++) {
    let x = Math.random() * (innerWidth - radius * 2) + radius
    let y = Math.random() * (innerHeight - radius * 2) + radius
    
    let dx = (Math.random() - 0.5) * 10
    let dy = (Math.random() - 0.5) * 10
    
    circleArray.push(new Circle(x, y, radius, dx, dy))
}

function animate() {
    c.clearRect(0, 0, innerWidth, innerHeight)
    requestAnimationFrame(animate)

    for (i = 0; i < circleArray.length; i++) {
        circleArray[i].update()

        for (q = 0; q < circleArray.length; q++) { 
            if ((circleArray[i] == circleArray[q])) {
                continue
            }

            posI = circleArray[i].position()
            posQ = circleArray[q].position()

            distance = Math.sqrt(Math.pow((posQ.X - posI.X), 2) + Math.pow((posQ.Y - posI.Y), 2))

            if (distance < 60) {
                circleArray[i].bounce()
            }

            // c.beginPath()
            // c.moveTo(posI.X, posI.Y)
            // c.lineTo(posQ.X, posQ.Y)
            // c.stroke()
        }
    }
}

animate()