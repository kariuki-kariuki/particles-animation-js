const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];


// mouse event handler

const mouse = {
    x: null,
    y: null,
    radius: 160
}

window.addEventListener("mousemove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log(mouse.x, mouse.y);
}); 

ctx.fillStyle = "white";
ctx.font = "30px Verdana";
ctx.fillText('A', 60, 30);

const data = ctx.getImageData(0, 0, 100, 100);


class Particle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.x;
        this.density = (Math.random() * 30) + 1;
    }

    draw(){
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.ard(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function init(){
    particleArray = [];
    particleArray.push(new Particle(50, 50 ));
    particleArray.push(new Particle(45, 60 ));
}
init();
// console.log(particleArray);
