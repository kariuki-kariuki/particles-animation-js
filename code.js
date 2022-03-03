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
        this.density = (Math.random() * 600) + 1;
    }

    draw(){
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update(){
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        if (distance < 300){
            this.x += forceDirectionX ;
            this.y += forceDirectionY ;
        } else {
            this.size =  3;
        }
    }
}

function init(){
    particleArray = [];
    for (let i = 0; i < 10; i++){
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height ;
        particleArray.push(new Particle(x, y));
    }
}

init();
// console.log(particleArray);


function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].draw();
        particleArray[i].update();
    }

    requestAnimationFrame(animate);
}
animate();